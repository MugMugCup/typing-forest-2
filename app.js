const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b52ec43c6a4e07',
  password: 'be0a4bcf',
  database: 'heroku_29e6df652a235ad'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

io.close();
const PORT =process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let waiter = "0";
x = 1;
let player = 0;

//追加
let friend_num = 1000;
let friend_array =[['a',999]];

server.listen(PORT, () => {
  console.log('listening on *:3000');
});

setInterval(function () {
  connection.query('SELECT 1');
}, 5000);

io.of("/").on('connection', (socket) => {
  
  console.log('a user connected');
  // io.emit('connected');
  socket.on('disconnect', () => {
    // io.emit('disconnected');
    console.log('user disconnected');
  });
  
  //追加
  socket.on('wait',function(){
    if(x % 1000 == 0){
      x == 1;
    }
    console.log('clicked');
    //待ちがいない時
    if(waiter == "0"){
      socket.join(x);
      io.to(x).emit('waiting', x);
      waiter = "1";
      console.log(waiter);
    }
    //待ちがいる時
    else if(waiter == "1"){
      socket.timeout(10000).broadcast.to(x).emit("confirm", (err, responses) => {
        if (err) {
          console.log('error');
        } else {
          //待っている相手が既にルームから抜けている時
          if(responses == ''){
            x++;
            socket.join(x);
            io.to(x).emit('waiting', x);
            waiter = "1";
            console.log(waiter);
          }
          //待っている相手がルームにいる時
          else{
            socket.join(x);
            console.log('match');
            io.to(x).emit('match', x);
            waiter = "0";
            x++;
          }
        }
      });
    }
  });

  socket.on('rank',function(){
    connection.query(
      'SELECT * FROM ranking order by score desc limit 10 ',
      (error, results) => {
        console.log('It worked!')
        socket.emit('ranking',results);
      }
    )
  });

  socket.on('rankUpdate',(a,b,c) =>{
    connection.query(
      'INSERT INTO ranking(name,score,color) VALUE(?,?,?)',[a,b,c],(error,results) =>{

      }
    );
  });

  socket.on('data', (a, b, r) => {
    console.log('data');
    socket.broadcast.to(r).emit('data', a, b);
  });
  
  socket.on('ready', (room) => {
    player++;
    console.log('ready' + player);
    if(player % 2 == 0)
    {
      io.to(room).emit('go');
      console.log('go');
    }
  })

  // socket.on('enemy',function(enemy){
  //   socket.broadcast.emit('data',enemy);
  //   console.log(enemy);
  // });

// g = 1.通常攻撃, 2.回復, 3.自傷
  socket.on('myAct',(a, b, r) => {
    console.log('shareAction');
    socket.broadcast.to(r).emit('opoAct',a, b);
  });

  // socket.on('use_sp', function(a, ro){
  //   socket.broadcast.to(ro).emit('use_sp', a);
  // });
  //追加
  let used = true;
  socket.on('friendWait',(a) =>{
    if(friend_array.length == 200){
      friend_array.slice(1,100);
    }
    //待ちがいるかを確認
    for(let i = 0;i < friend_array.length;i++){
      if(friend_array[i][0] == a){
        io.timeout(10000).to(friend_array[i][1]).emit("confirm", (err, responses) => {
          if (err) {
            console.log('error');
          } else {
            //待っている相手が既にルームから抜けている時
            if(responses == ''){
              console.log(responses);
              socket.join(friend_array[i][1]);
              used = false;
            }
            //待っている相手がルームにいる時
            else{
              console.log('aaa');
              socket.join(friend_array[i][1]);
              used = false;
              io.to(friend_array[i][1]).emit('match', friend_array[i][1]);
              console.log(friend_array.splice(i,i));
            }
          }
        });
        used = false;
      }

    }
    //待ちがいなければ
    if(used == true){
      console.log('usedtrue')
      socket.join(friend_num);
      friend_array.push([a,friend_num]);
      friend_num++;
    }
    used = true;
    console.log(friend_array);
  });
});

