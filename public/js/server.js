var socket = io();

socket.on('waiting',()=>{
  console.log('待機中');
});

socket.on('matching',()=>{
  console.log('マッチング');
});

socket.on('myHP',(myHP)=>{  
  console.log('あなたのHP:' + myHP);
});
