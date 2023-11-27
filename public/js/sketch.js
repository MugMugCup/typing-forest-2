/* 変数 */

// 自分用
let scene = 0;

let rand_num;
let char_pos = 0;
let type_num = 0;
let corr_type = 0;
let miss_type = 0;
let no_miss = 0;
let score = 0;

let f_time = 0;
let time = 0;
let left_time = 60;
let able_type = false;
let move_time = false;
let flags = new Array();
for(let i = 0; i < 10; i++)
{
    flags.push(true);
}
let room;
let space = 0;
let ranking;
let icons = [];
let crown = [];

let array = '';
let wordR;
let pattern;
let idx1 = 0;
let idx2 = 0;
let temp = '';
let nFlag = false;
let helloText = '';
let texts = '';
let before;

// プレイヤー1
let team1 = 0;
let user1 = 'プレイヤー1';
let room1;
let hp1 = 5;
let sp1 = 0; // max10
let life1 = 5;
let sp_rdy1 = false;
let sp_use1 = false;
let hp_que1 = [];
let hp_bgn1 = 0; // que の先頭
let sp_que1 = [];
let sp_bgn1 = 0;
let grn1 = 135;
let red1 = 135;
let blu1; // hpゲージの目標
let yel1 = [0, 0, 0, 0, 0];
let ppl1 = 0; // sp ゲージの目標
let opa1 = 255;
let disapp1 = false;
let down1;
let revive1;

// プレイヤー2
let team2 = -1;
let user2 = '';
let hp2 = 5;
let sp2 = 0; // max10
let life2 = 5;
let sp_use2 = false;
let hp_que2 = [];
let hp_bgn2 = 0; // que の先頭
let sp_que2 = [];
let sp_bgn2 = 0;
let grn2 = 135;
let red2 = 135;
let blu2; // hpゲージの目標
let yel2 = [0, 0, 0, 0, 0];
let ppl2 = 0; // sp ゲージの目標
let opa2 = 255;
let disapp2 = false;
let down2;
let revive2;

function preload()
{
    // フォント
    hangyaku_font = loadFont('./font/Hangyaku-Rp6ye.ttf');
    regular_font = loadFont('./font/VeraMono.ttf');
    
    // 画像
    title_bkg = loadImage('./img/title_bkg.png');
    title_bkg2 = loadImage('./img/title_bkg2.png');
    waiting_bkg = loadImage('./img/waiting_bkg.png');
    playing_bkg = loadImage('./img/playing_bkg.png');
    result_bkg = loadImage('./img/result_bkg.png');

    stick = loadImage('./img/stick.png');
    solo_img = loadImage('./img/solo_btn.png');
    mult_img = loadImage('./img/mult_btn.png');
    paper = loadImage('./img/paper.png');
    paper2 = loadImage('./img/paper2.png');
    vs_img = loadImage('./img/vs.png');
    nokori = loadImage('./img/nokori.png');
    mugen = loadImage('./img/mugen.png');
    byou = loadImage('./img/byou.png');
    full_heart = loadImage('./img/full_heart.png');
    empty_heart = loadImage('./img/empty_heart.png');
    stamp = loadImage('./img/stamp.png');
    spacekey = loadImage('./img/spacekey.png');

    credit1 = loadImage('./img/rule&credit/credit1.png');
    credit2 = loadImage('./img/rule&credit/credit2.png');
    rule_wait = loadImage('./img/rule&credit/rule_wait.png');
    rule_solo = loadImage('./img/rule&credit/rule_solo.png');
    rule_mult = loadImage('./img/rule&credit/rule_mult.png');
    book = loadImage('./img/rule&credit/book.png');

    crown[0] = loadImage('./img/crown/1st.png');
    crown[1] = loadImage('./img/crown/2nd.png');
    crown[2] = loadImage('./img/crown/3rd.png');

    icons[0] = loadImage('./img/icons/grn_icon.png');
    icons[1] = loadImage('./img/icons/red_icon.png');
    icons[2] = loadImage('./img/icons/blu_icon.png');
    icons[3] = loadImage('./img/icons/yel_icon.png');
    icons[4] = loadImage('./img/icons/ppl_icon.png');
    
    land = loadImage('./img/land.png');
    grass = loadImage('./img/grass.png');
    volcano = loadImage('./img/volcano.png');
    ocean = loadImage('./img/ocean.png');
    desert = loadImage('./img/desert.png');
    cemetry = loadImage('./img/cemetry.png');
    
    grn_mons1 = loadImage('./img/mons/grn_mons1.png');
    grn_mons2 = loadImage('./img/mons/grn_mons2.png');
    grn_mons3 = loadImage('./img/mons/grn_mons3.png');
    grn_mons4 = loadImage('./img/mons/grn_mons4.png');
    grn_mons5 = loadImage('./img/mons/grn_mons5.png');
    red_mons1 = loadImage('./img/mons/red_mons1.png');
    red_mons2 = loadImage('./img/mons/red_mons2.png');
    red_mons3 = loadImage('./img/mons/red_mons3.png');
    red_mons4 = loadImage('./img/mons/red_mons4.png');
    red_mons5 = loadImage('./img/mons/red_mons5.png');
    blu_mons1 = loadImage('./img/mons/blu_mons1.png');
    blu_mons2 = loadImage('./img/mons/blu_mons2.png');
    blu_mons3 = loadImage('./img/mons/blu_mons3.png');
    blu_mons4 = loadImage('./img/mons/blu_mons4.png');
    blu_mons5 = loadImage('./img/mons/blu_mons5.png');
    yel_mons1 = loadImage('./img/mons/yel_mons1.png');
    yel_mons2 = loadImage('./img/mons/yel_mons2.png');
    yel_mons3 = loadImage('./img/mons/yel_mons3.png');
    yel_mons4 = loadImage('./img/mons/yel_mons4.png');
    yel_mons5 = loadImage('./img/mons/yel_mons5.png');
    ppl_mons1 = loadImage('./img/mons/ppl_mons1.png');
    ppl_mons2 = loadImage('./img/mons/ppl_mons2.png');
    ppl_mons3 = loadImage('./img/mons/ppl_mons3.png');
    ppl_mons4 = loadImage('./img/mons/ppl_mons4.png');
    ppl_mons5 = loadImage('./img/mons/ppl_mons5.png');

    grn_effe = loadImage('./img/effect/grn_effe.png');
    red_effe = loadImage('./img/effect/red_effe.png');
    blu_effe = loadImage('./img/effect/blu_effe.png');
    yel_effe = loadImage('./img/effect/yel_effe.png');
    ppl_effe = loadImage('./img/effect/ppl_effe.png');

    // 音源
    title_bgm = loadSound('./snd/title_bgm.mp3');
    playing_bgm = loadSound('./snd/playing_bgm.mp3');
    result_bgm = loadSound('./snd/result_bgm.mp3');

    click = loadSound('./snd/click.mp3');
    warp = loadSound('./snd/warp.mp3');
    select = loadSound('./snd/select.mp3');
    ready_snd = loadSound('./snd/ready.mp3');
    summon = loadSound('./snd/summon.mp3');
    vs_snd = loadSound('./snd/vs.mp3');
    start = loadSound('./snd/start.mp3');
    corr_snd = loadSound('/snd/corr_type.mp3');
    miss_snd = loadSound('./snd/miss_type.mp3');
    jab = loadSound('./snd/jab.mp3');
    strong = loadSound('./snd/strong.mp3');
    sp_rdy_snd = loadSound('./snd/sp_rdy.mp3');
    sp_use_snd = loadSound('./snd/sp_use.mp3');
    heal = loadSound('./snd/heal.mp3');
    finish = loadSound('./snd/finish.mp3');
    write = loadSound('./snd/write.mp3');
    press = loadSound('./snd/press.mp3');
}

function setup()
{
    // キャンバス
    createCanvas(900, 600);

    // 乱数
    rand_num = Math.floor(Math.random()*questions.length);
    wordR = kanaToRoman(questions[rand_num][1]);
    pattern = new Array(wordR.length).fill(0);

    // フォント
    textFont(hangyaku_font);

    // ソロボタン
    solo_btn = new Sprite();
    solo_btn.img = './img/solo_btn.png';
    solo_btn.scale = 0.17;
    solo_btn.x = 240;
    solo_btn.y = 300;
    solo_btn.h = 60;
    solo_btn.w = 210;
    solo_btn.rotation = -5;
    solo_btn.collider = 's';
    solo_btn.visible = false;

    // マルチボタン
    mult_btn = new Sprite();
    mult_btn.img = './img/mult_btn.png';
    mult_btn.scale = 0.15;
    mult_btn.x = 240;
    mult_btn.y = 375;
    mult_btn.h = 55;
    mult_btn.w = 190;
    mult_btn.rotation = -5;
    mult_btn.collider = 's';
    mult_btn.visible = false;

    // ルールボタン
    rule_btn = new Sprite();
    rule_btn.img = './img/rule_btn.png';
    rule_btn.scale = 0.4;
    rule_btn.x = 856;
    rule_btn.y = 20;
    rule_btn.h = 33;
    rule_btn.w = 78;
    rule_btn.collider = 's';
    rule_btn.visible = false;

    // クレジットボタン
    credit_btn = new Sprite();
    credit_btn.img = './img/credit_btn.png';
    credit_btn.scale = 0.4;
    credit_btn.x = 770;
    credit_btn.y = 20;
    credit_btn.h = 33;
    credit_btn.w = 78;
    credit_btn.collider = 's';
    credit_btn.visible = false;

    // ランキングボタン
    rank_btn = new Sprite();
    rank_btn.img = './img/rule&credit/rank_btn.png';
    rank_btn.scale = 0.4;
    rank_btn.x = 684;
    rank_btn.y = 20;
    rank_btn.h = 33;
    rank_btn.w = 78;
    rank_btn.collider = 's';
    rank_btn.visible = false;

    // 本、右ボタン
    book_right_btn = new Sprite();
    book_right_btn.img = './img/rule&credit/book_right.png';
    book_right_btn.scale = 0.1;
    book_right_btn.x = 785;
    book_right_btn.y = 280;
    book_right_btn.h = 60;
    book_right_btn.w = 60;
    book_right_btn.collider = 's';
    book_right_btn.visible = false;

    // 本、左ボタン
    book_left_btn = new Sprite();
    book_left_btn.img = './img/rule&credit/book_left.png';
    book_left_btn.scale = 0.1;
    book_left_btn.x = 115;
    book_left_btn.y = 300;
    book_left_btn.h = 60;
    book_left_btn.w = 60;
    book_left_btn.collider = 's';
    book_left_btn.visible = false;

    //閉じるボタン
    cross_btn=new Sprite();
    cross_btn.img='./img/rule&credit/cross.png';
    cross_btn.scale=0.1;
    cross_btn.x=730;
    cross_btn.y=85;
    cross_btn.d=50;
    cross_btn.collider='s';
    cross_btn.visible=false;

    // 右ボタン
    right_btn = new Sprite();
    right_btn.img = './img/right_btn.png';
    right_btn.scale = 0.06;
    right_btn.x = 685;
    right_btn.y = 175;
    right_btn.h = 40;
    right_btn.w = 30;
    right_btn.collider = 's';
    right_btn.visible = false;

    // 左ボタン
    left_btn = new Sprite();
    left_btn.img = './img/left_btn.png';
    left_btn.scale = 0.06;
    left_btn.x = 445;
    left_btn.y = 175;
    left_btn.h = 40;
    left_btn.w = 30;
    left_btn.collider = 's';
    left_btn.visible = false;

    // タイトルボタン
    title_btn = new Sprite();
    title_btn.text = 'タイトルへ';
    title_btn.textSize = 70;
    title_btn.color = color(255, 255, 255, 0);
    title_btn.stroke = color(255, 255, 255, 0);
    title_btn.x = 680;
    title_btn.y = 460;
    title_btn.h = 50;
    title_btn.w = 200;
    title_btn.rotation = -13
    title_btn.collider = 's';
    title_btn.visible = false;

    title_bgm.play(0, 1, 0.3);

    socket.emit('rank');
}

socket.on('ranking', (ranks) => {
    ranking = ranks;
});

function draw()
{
    // 初期化
    clear();

    // 時間
    if(move_time)
    {
        f_time++;
        time = ((Math.floor((f_time / 60) * 10)) / 10);
    }

    // 背景
    background(220);

    // キー入力のフレーム数
    space = kb.space;
    right = kb.presses('ArrowRight');
    left = kb.presses('ArrowLeft');

    // タイトル画面
    if(scene == 0)
    {
        image(title_bkg, 0, -100, 900, 700);

        if(!title_bgm.isPlaying())
        {
            title_bgm.play(0, 1, 0.3);
        }

        textAlign(CENTER);
        textSize(180);
        fill(255);
        text('タイプの森', 450, 200);
        textAlign(CORNER);

        imageMode(CENTER);
        image(stick, 180, 380, 350, 280);
        imageMode(CORNER);

        // flagsは最初全てtrueになっている配列
        // 1度だけ実行する処理で使う
        if(flags[0])
        {
            flags[0] = false;
            solo_btn.visible = true;
            mult_btn.visible = true;
            credit_btn.visible = true;
            rule_btn.visible = true;
            rank_btn.visible = true;

            cross_btn.visible = false;
            book_right_btn.visible = false;
            book_left_btn.visible = false;
        }

        // クレジットボタン
        if(credit_btn.mouse.presses() && flags[1] && flags[2] && flags[3])
        {
            flags[1] = false;
            flags[2] = true;
            page = 1;
            btnDele();
            cross_btn.x = 730;
            cross_btn.y = 85;
            book_right_btn.visible = true;
            book_left_btn.visible = true;
            cross_btn.visible = true;
        }
        if(!flags[1])
        {
            image(title_bkg2, 0, 0);
            if(page == 1)
            {
                book_right_btn.visible = true;
                image(credit1, 0, 0);
                book_left_btn.visible = false;
            }
            else if(page == 2)
            {
                book_left_btn.visible = true;
                image(credit2, 0, 0);
                book_right_btn.visible = false;
            }

            //クレジットを表示しているときの矢印ボタン
            if(book_right_btn.mouse.presses()&&page<2)
            {
                page++;
            }

            if(book_left_btn.mouse.presses()&&page>1)
            {
                page--;
            }
        }

        // ルールボタン
        if(rule_btn.mouse.presses() && flags[1] && flags[2] && flags[3])
        {
            flags[1] = true;
            flags[2] = false;
            page = 1;
            btnDele();
            cross_btn.x = 730;
            cross_btn.y = 85;
            cross_btn.visible = true;
        }
        if(!flags[2])
        {
            image(title_bkg2, 0, 0);
            if(page == 1)
            {
                book_right_btn.visible = true;
                image(rule_wait, 0, 0);
                book_left_btn.visible = false;
            }
            else if(page == 2)
            {
                book_right_btn.visible = true;
                image(rule_solo,0,0);
                book_left_btn.visible = true;
            }
            else if(page == 3)
            {
                book_right_btn.visible=false;
                image(rule_mult,0,0);
                book_left_btn.visible=true;
            }

            //ルールを表示しているときの矢印ボタン
            if(book_right_btn.mouse.presses()&&page<3)
            {
                page++;
            }

            if(book_left_btn.mouse.presses()&&page>1)
            {
                page--;
            }
        }
        
        // ランキングボタン
        if(rank_btn.mouse.presses() && flags[1] && flags[2] && flags[3])
        {
            flags[3] = false;
            btnDele();
            cross_btn.x = 630;
            cross_btn.y = 65;
            cross_btn.visible = true;
        }

        if(!flags[3])
        {
            image(title_bkg2, 0, 0);
            image(paper2, 0, 0);
            textSize(50);
            fill(87, 40, 0);
            text('ランキング', 380, 90);
            rankDraw(0, 295, 130);
            rankDraw(1, 295, 180);
            rankDraw(2, 295, 230);
            rankDraw(3, 278, 280);
            rankDraw(4, 278, 321);
            rankDraw(5, 278, 362);
            rankDraw(6, 278, 403);
            rankDraw(7, 278, 444);
            rankDraw(8, 278, 485);
            rankDraw(9, 278, 526);
        }
            
        //閉じるボタン
        if(cross_btn.mouse.presses() && (!flags[1] || !flags[2] || !flags[3]))
        {
            flags[0] = true;
            flags[1] = true;
            flags[2] = true;
            flags[3] = true;
            book_left_btn.visible = false;
            book_right_btn.visible = false;
            cross_btn.visible = false;
        }

        if(solo_btn.mouse.presses() && flags[1] && flags[2] && flags[3])
        {
            sceneChange(1);
        }
        if(mult_btn.mouse.presses() && flags[1] && flags[2] && flags[3])
        {
            sceneChange(4);
        }
        
    }

    // ソロ待機画面
    else if(scene == 1)
    {
        image(waiting_bkg, 0, -100, 900, 700);

        frame();

        message('Spaceキーでチームを選択!!');

        selectTeam();

        if(space == 1)
        {
            sceneChange(2);
            space++;
        }
        else
        {
            space = 0;
        }
    }
    // ソロプレイ画面
    else if(scene == 2)
    {
        image(playing_bkg, 0, -400, 900, 1000);
        frame();

        if(time <= -2)
        {
            message('Spaceキーで準備完了!!');

            if(space == 1)
            {
                space++;
                move_time = true;
                title_bgm.stop();
            }
            else
            {
                space = 0;
            }
        }
        else if(-2 <= time && time < -1)
        {
            message('よーい');
        }
        else if(-1 <= time && time < 0)
        {
            if(flags[0])
            {
                flags[0] = false;
                start.play();
            }
            message('スタート!!');
        }
        else if(0 <= time && time < left_time)
        {
            if(flags[1])
            {
                flags[1] = false;
                able_type = true;
            }

            if(!playing_bgm.isPlaying())
            {
                playing_bgm.play(0, 1, 0.3);
            }

            drawQuestion();
        }
        else if(left_time <= time && time < left_time + 2)
        {
            if(flags[2])
            {
                flags[2] = false;
                able_type = false;
                finish.play();
            }

            message('終了!!');
        }
        else if(left_time + 2 <= time)
        {
            sceneChange(3);
            socket.emit('rankUpdate', user1.value(), score, team1);
        }

        if(0 <= time)
        {
            monsDisp(1, 450, 250);

            hpBar(1, 383, 350);
        }

        leftTimer();

        spGauge(1, 445, 105, 1);
    }
    // ソロリザルト画面
    else if(scene == 3)
    {
        image(result_bkg, 0, -100, 900, 700);

        if(!result_bgm.isPlaying())
        {
            result_bgm.play(0, 1, 0.3);
        }

        if(0.2 <= time && flags[0])
        {
            flags[0] = false;
            write.play();
        }

        if(0.8 <= time)
        {
            textFont(hangyaku_font);
            textAlign(CENTER, CENTER);
            textSize(70);
            rotate(3);
            fill(0);
            text('~Result~', 220, 50);
            textSize(50);
            textAlign(CORNER, CORNER);
            if(user1.value().length == 0)
            {
                text('プレイヤー のスコアは', 70, 200);
            }
            else
            {
                text(user1.value() + ' のスコアは', 70, 200);
            }
            textSize(100);
            textAlign(CENTER, CENTER);
            text(score + '点', 220, 300);
            rotate(-3);
            textAlign(CORNER, CORNER);
        }

        if(2 <= time)
        {
            rotate(7);
            textSize(50);
            text('正打数:' + corr_type + '回', 500, 20);
            text('誤打数:' + miss_type + '回', 500, 90);
            text('正答率:' + parseInt(corr_type / (corr_type + miss_type) * 100) + '%', 500, 160);
            rotate(-7);
        }

        if(3.3 <= time)
        {
            title_btn.visible = true;
        }

        if(4.6 <= time)
        {
            write.stop();
        }

        if(6 <= time)
        {
            if(flags[1])
            {
                flags[1] = false;
                press.play();
            }
            image(stamp, 300, 350, 170, 150);
        }

        if(title_btn.mouse.presses())
        {
            location.reload();
        }
    }
    // マルチ待機画面
    else if(scene == 4)
    {
        image(waiting_bkg, 0, 0, 900, 600);

        if(!title_bgm.isPlaying())
        {
            title_bgm.play(0, 1, 0.3);
        }

        frame();

        if(0 <= time && time < 1)
        {
            if(time == 0)
            {
                message('Spaceキーで準備完了!!');
            }
            else
            {
                message('マッチングを開始します!!');
            }

            selectTeam();

            // Spaceキー
            if(space == 1)
            {
                move_time = true;
                click.play();
                space++;
            }
            else
            {
                space = 0;
            }

        }
        else if(1 <= time)
        {
            if(flags[1])
            {
                flags[1] = false;
                move_time = false;
                delCreateInput();
                right_btn.visible = false;
                left_btn.visible = false;
                let room1_value = room1.value();
                let room1_ex = room1.value();

                if(room1_value.slice(-1) == '　' || room1_value.slice(-1) == ' '){
                    room1_ex = room1_value.slice(0,room1_value.length - 1);
                }

                if(room1_value.length == 0){
                    socket.emit('wait');
                }else{
                    socket.emit('friendWait',room1_ex)
                }
            }

            if(time == 1)
            {
                message('対戦相手を探しています...');
            }
            else
            {
                message('対戦相手が見つかりました!!');
            }

            matchTeam(1, 270, 205);

            matchTeam(2, 630, 205);

            // socket.on('match', (r) => {
            //     room = r;
            //     socket.emit('data', user1.value(), team1, r);
            // });

            socket.on('data', (a, b) => {
                if(a.length != 0)
                {
                    user2 = a;
                }
                else
                {
                    user2 = 'プレイヤー2';
                }
                team2 = b;
                move_time = true;
            });

            if(3 <= time)
            {
                sceneChange(5);
            }
        }
    }
    // マルチプレイ画面
    else if(scene == 5)
    {
        image(playing_bkg, 0, -400, 900, 1000);
        frame();

        if(time < -5)
        {
            if(space == 1 && flags[0])
            {
                space++;
                flags[0] = false;
                ready_snd.play();
                socket.emit('ready', room);
            }
            else
            {
                space = 0;
            }

            if(flags[0])
            {
                message('Spaceキーで準備完了!!');
            }
            else
            {
                message('準備完了!! 対戦相手を待っています...', 60);
            }

            socket.on('go', () => {
                move_time = true;
                title_bgm.stop();
            });
        }
        else if(-3 <= time && time < -2)
        {
            if(flags[3])
            {
                flags[3] = false;
                vs_snd.play();
            }
            imageMode(CENTER);
            image(vs_img, 450, 250, 150, 150);
            imageMode(CORNER);
            message(user1.value()+" VS "+user2);
        }
        else if(-2 <= time && time < -1)
        {
            message('よーい...');
        }
        else if(-1 <= time && time < 0)
        {
            message('スタート!!');
            if(flags[4])
            {
                flags[4] = false;
                start.play();
            }
        }
        else if(time == 0)
        {
            if(flags[5])
            {
                flags[5] = false;
                move_time = false;
                able_type = true;
            }

            if(!playing_bgm.isPlaying())
            {
                playing_bgm.play(0, 1, 0.3);
            }

            drawQuestion();

            if(life1 <= 0 || life2 <= 0)
            {
                move_time = true;
                able_type = false;
            }
        }
        else if(0 < time && time < 2)
        {
            message('終了!!');
            if(flags[6])
            {
                flags[6] = false;
                finish.play();
            }
        }

        leftTimer();

        // プレイヤー1 UI
        if(-5 <= time)
        {
            if(flags[1])
            {
                flags[1] = false;
                summon.play();
            }

            if(sp_bgn1 < 0){
                imageMode(CENTER);
                if(team1 == 0)
                {
                    image(grn_effe,240,320,200,100);
                }
                else if(team1 == 1)
                {
                    image(red_effe,240,320,200,100);
                }
                else if(team1 == 2)
                {
                    image(blu_effe,240,320,200,100);
                }
                else if(team1 == 3)
                {
                    image(yel_effe,240,320,200,100);
                }
                else if(team1 == 4)
                {
                    image(ppl_effe,240,320,200,100);
                }
            }

            monsDisp(1, 240, 270);

            if(life1 > 0)
            {
                hpBar(1, 170, 370);
            }
        }

        spGauge(1, 150, 70, 0.9)

        lifeIcon(1, 60, 35);

        // プレイヤー2 UI
        if(-4 <= time)
        {
            if(flags[2])
            {
                flags[2] = false;
                summon.play();
            }

            if(sp_bgn2 < 0)
            {
                imageMode(CENTER);
                // // 発動中エフェクト
                if(team2 == 0)
                {
                    image(grn_effe,635,250,200,100);
                }
                else if(team2 == 1)
                {
                    image(red_effe,635,250,200,100);
                }
                else if(team2 == 2)
                {
                    image(blu_effe,635,250,200,100);
                }
                else if(team2 == 3)
                {
                    image(yel_effe,635,250,200,100);
                }
                else if(team2 == 4)
                {
                    image(ppl_effe,635,250,200,100);
                }
            }

            monsDisp(2, 640, 200);

            if(life2 > 0)
            {
                hpBar(2, 570, 300);
            }
        }

        spGauge(2, 650, 70, 0.9);

        lifeIcon(2, 550, 35);

        if(2 <= time)
        {
            sceneChange(6);
        }
    }
    // マルチリザルト画面
    else if(scene == 6)
    {
        image(result_bkg, 0, -100, 900, 700);

        if(!result_bgm.isPlaying())
        {
            result_bgm.play(0, 1, 0.3);
        }

        if(0.2 <= time && flags[0])
        {
            flags[0] = false;
            write.play();
        }

        if(0.8 <= time)
        {
            textAlign(CENTER, CENTER);
            textSize(70);
            rotate(3);
            fill(0);
            text('~Result~', 220, 50);
            textSize(50);
            textAlign(CORNER, CORNER);
            if(user1.value().length != 0)
            {
                text(user1.value() + ' の', 61, 167);
            }
            else
            {
                text('プレイヤー1 の', 61, 167);
            }
            textAlign(CENTER, CENTER);
            textSize(100);
            if(life1 <= 0)
            {
                text('負け...', 240, 250);
            }
            else
            {
                text('勝ち!!', 240, 250);
            }
            rotate(-3);
            textAlign(CORNER, CORNER);
        }

        if(2 <= time)
        {
            rotate(7);
            textSize(50);
            text('正打数:' + corr_type + '回', 500, 20);
            text('誤打数:' + miss_type + '回', 500, 90);
            text('正答率:' + parseInt(corr_type / (corr_type + miss_type) * 100) + '%', 500, 160);
            rotate(-7);
        }

        if(3.3 <= time)
        {
            title_btn.visible = true;
        }

        if(4.6 <= time)
        {
            write.stop();
        }

        if(6 <= time)
        {
            if(flags[1])
            {
                flags[1] = false;
                press.play();
            }
            image(stamp, 300, 350, 170, 150);
        }

        if(title_btn.mouse.presses())
        {
            location.reload();
        }
    }

    socket.on('opoTeam', (a) => {
        team2 = a;
    });
}

socket.on('match', (r) => {
    room = r;
    socket.emit('data', user1.value(), team1, r);
});

socket.on('confirm',(callback)=>{
    callback('相手がいます');
})

socket.on('opoAct', (a, b) => {

    if(a == 0)
    {
        hp_que1.push(b);
    }
    else if(a == 1)
    {
        sp_que1.push(b);
    }
    else if(a == 2)
    {
        hp_que2.push(b);
    }
    else if(a == 3)
    {
        sp_que2.push(b);
    }
});

function keyTyped()
{
    if(able_type)
    {
        type_num++;
        temp += key;
        if(key == wordR[idx1][pattern[idx1]][idx2])
        {
            before = key;
            corr_type++;
            corr_snd.play();
            char_pos++;
            idx2++;
        }
        else
        {
            let reg = new RegExp('^' + temp);
            // 2種類目のwordに変える
            for(let i = 0; i < wordR[idx1].length; i++)
            {
                if(!!wordR[idx1][i].match(reg))
                {
                    pattern[idx1] = i;
                    texts = colorTyped();
                    break;
                }
            }
            // 2種類目で試す
            if(key == wordR[idx1][pattern[idx1]][idx2])
            {
                before = key;
                corr_type++;
                corr_snd.play();
                char_pos++;
                idx2++;
            }
            else
            {
                // 「ん」特別措置
                if(wordR[idx1][pattern[idx1]] == 'nn' && wordR[idx1].length == 3)
                {
                    for(let i = 0; i < wordR[idx1 + 1].length; i++)
                    {
                        if(key == wordR[idx1 + 1][i][0] && before == 'n')
                        {
                            pattern[idx1] = 2;
                            pattern[idx1 + 1] = i;
                            nFlag = true;
                            break;
                        }
                    }
                    //「ん」の途中で間違えた時
                    if(!nFlag) 
                    {
                        temp = temp.slice(0, -1);
                        miss_type++;
                    }
                }
                // 間違えた時
                else
                {
                    miss_type++;
                    miss_snd.play();
                    no_miss = 0;
                    // パープル
                    if(scene == 2 && team1 == 4 && sp_use1)
                    {
                        if(time + 60 * 5 <= left_time)
                        {
                            f_time = 60 * left_time;
                        }
                        else
                        {
                            f_time += 60 * 5;
                        }
                    }
                    else if(scene == 5 && team1 == 4 && sp_use1)
                    {
                        hp_que1.push(-3);
                        socket.emit('myAct', 2, -3, room);
                    }
                    temp = temp.slice(0, -1);
                }
            }
        }
        if (idx2 == wordR[idx1][pattern[idx1]].length) 
        {
            idx1++;
            if(nFlag)
            {
                corr_type++;
                corr_snd.play();
                before = key;
                char_pos++;
                idx2 = 1;
                nFlag = false;
                temp = temp.slice(1);
            } 
            else 
            {
                idx2 = 0;
                temp = '';
            }
        }
        if (idx1 == wordR.length) 
        {
            collectAnswer();
            idx1 = 0;
            wordR = kanaToRoman(questions[rand_num][1]);
            pattern = new Array(wordR.length).fill(0);
        }
    }
}

// 正解した時
function collectAnswer()
{
    if(scene == 2)
    {
        if((team1 == 3 || team1 == 4) && sp_use1)
        {
            hp_que1.push(-2);
        }
        else
        {
            hp_que1.push(-1);
        }

        if(!sp_use1 && 6 <= no_miss)
        {
            sp_que1.push(2);
        }
        else if(!sp_use1 && 3 <= no_miss)
        {
            sp_que1.push(1.5);
        }
        else if(!sp_use1)
        {
            sp_que1.push(1);
        }
    }
    else if(scene == 5)
    {
        // hpバー
        if((team1 == 3 || team1 == 4) && sp_use1)
        {
            hp_que2.push(-2);
            socket.emit('myAct', 0, -2, room);
        }
        else
        {
            hp_que2.push(-1);
            socket.emit('myAct', 0, -1, room);
        }

        // spゲージ
        if(!sp_use1 && 6 <= no_miss)
        {
            sp_que1.push(2);
            socket.emit('myAct', 3, 2, room);
        }
        else if(!sp_use1 && 3 <= no_miss)
        {
            sp_que1.push(1.5);
            socket.emit('myAct', 3, 1.5, room);
        }
        else if(!sp_use1)
        {
            sp_que1.push(1);
            socket.emit('myAct', 3, 1, room);
        }
    }

    // 乱数
    if(team1 == 0 && sp_use1)
    {
        rand_num = Math.floor(Math.random() * 83);
    }
    else if(team1 == 3 && sp_use1)
    {
        rand_num = 196 + Math.floor(Math.random() * 49);
    }
    else
    {
        rand_num = Math.floor(Math.random() * questions.length);
    }

    char_pos = 0;
    no_miss++;
}

function hpBar(p, x, y)
{
    if(p == 1)
    {
        if(hp_bgn1 == 0 && able_type)
        {
            if(hp_que1.length != 0)
            {
                hp_bgn1 = hp_que1[0];

                // 被ダメージ処理へ
                if(hp_bgn1 < 0)
                {
                    // 気絶なし
                    if(hp1 + hp_bgn1 > 0)
                    {
                        hp1 += hp_bgn1;
                        grn1 = 135 * hp1 / 5;
                        down1 = false;
                        score = score - 100 * hp_bgn1;
                        if(scene == 2)
                        {
                            jab.play();
                        }
                    }
                    // 気絶あり
                    else
                    {
                        hp1 = hp1 + 5 + hp_bgn1;
                        grn1 = 0;
                        down1 = true;
                        score = score - 100 * hp_bgn1 + 300;
                        if(scene == 2)
                        {
                            strong.play();
                        }
                    }
                }
                // 回復処理へ
                else if(hp_bgn1 > 0)
                {
                    // 蘇生なし
                    if(2 < hp1 && 5 <= life1)
                    {
                        hp1 = 5;
                    }
                    else if(hp1 + hp_bgn1 <= 5)
                    {
                        hp1 += hp_bgn1;
                        revive1 = false;
                    }
                    else
                    {
                        hp1 = (hp1 + hp_bgn1) % 5;
                        revive1 = true;
                    }
                    blu1 = 135 * hp1 / 5;
                }

                hp_que1.shift();
            }
        }
        // 被ダメージ処理
        else if(hp_bgn1 < 0)
        {
            // 気絶
            if(red1 <= 0 && down1)
            {
                grn1 = 135 * hp1 / 5;
                red1 = 135;
                down1 = false;
                life1--;
            }
            // 被ダメ
            else if(grn1 < red1 || down1)
            {
                red1 -= 2;
            }
            // 終了
            else
            {
                red1 = grn1;
                hp_bgn1 = 0;
            }
        }
        // 回復処理
        else if(hp_bgn1 > 0)
        {
            // 蘇生
            if(135 <= grn1 && revive1)
            {
                grn1 = 0;
                revive1 = false;
                life1++;
            }
            // 回復
            else if(grn1 < blu1 || revive1)
            {
                grn1 += 2;
            }
            // 終了
            else
            {
                grn1 = blu1;
                hp_bgn1 = 0;
            }

            // 赤
            red1 = grn1;
        }

        // 灰
        fill(79);
        rect(x - 5, y - 5, 135 + 10, 20 + 10, 10);

        // 赤
        fill(255, 0, 0);
        rect(x, y, red1, 20, 5);
        
        // 緑
        fill(87, 189, 34);
        if(hp_bgn1 > 0 && (frameCount) % 6 < 3)
        {
            fill(196, 248, 216);
        }
        rect(x, y, grn1, 20, 5);
    }
    else if(p == 2)
    {
        if(hp_bgn2 == 0 && able_type)
        {
            if(hp_que2.length != 0)
            {
                hp_bgn2 = hp_que2[0];

                // 被ダメージ処理へ
                if(hp_bgn2 < 0)
                {
                    // 気絶なし
                    if(hp2 + hp_bgn2 > 0)
                    {
                        hp2 += hp_bgn2;
                        grn2 = 135 * hp2 / 5;
                        down2 = false;
                        score = score - 100 * hp_bgn2;
                        jab.play();
                    }
                    // 気絶あり
                    else
                    {
                        hp2 = hp2 + 5 + hp_bgn2;
                        grn2 = 0;
                        down2 = true;
                        score = score - 100 * hp_bgn2 + 300;
                        strong.play();
                    }
                }
                // 回復処理へ
                else if(hp_bgn2 > 0)
                {
                    // 蘇生なし
                    if(2 < hp2 && 5 <= life2)
                    {
                        hp2 = 5;
                    }
                    else if(hp2 + hp_bgn2 <= 5)
                    {
                        hp2 += hp_bgn2;
                        revive2 = false;
                    }
                    else
                    {
                        hp2 = (hp2 + hp_bgn2) % 5;
                        revive2 = true;
                    }
                    blu2 = 135 * hp2 / 5;
                }

                hp_que2.shift();
            }
        }
        // 被ダメージ処理
        else if(hp_bgn2 < 0)
        {
            // 気絶
            if(red2 <= 0 && down2)
            {
                grn2 = 135 * hp2 / 5;
                red2 = 135;
                down2 = false;
                life2--;
            }
            // 被ダメ
            else if(grn2 < red2 || down2)
            {
                red2 -= 2;
            }
            // 終了
            else
            {
                red2 = grn2;
                hp_bgn2 = 0;
            }
        }
        // 回復処理
        else if(hp_bgn2 > 0)
        {
            // 蘇生
            if(135 <= grn2 && revive2)
            {
                grn2 = 0;
                revive2 = false;
                life2++;
            }
            // 回復
            else if(grn2 < blu2 || revive2)
            {
                grn2 += 2;
            }
            // 終了
            else
            {
                grn2 = blu2;
                hp_bgn2 = 0;
            }

            // 赤
            red2 = grn2;
        }

        // 灰
        fill(79);
        rect(x - 5, y - 5, 135 + 10, 20 + 10, 10);

        // 赤
        fill(255, 0, 0);
        rect(x, y, red2, 20, 5);
        
        // 緑
        fill(87, 189, 34);
        if(hp_bgn2 > 0 && (frameCount) % 6 < 3)
        {
            fill(196, 248, 216);
        }
        rect(x, y, grn2, 20, 5);
    }
}

function spGauge(p, x, y, s)
{
    if(p == 1)
    {
        if(sp_bgn1 == 0)
        {
            if(sp_que1.length != 0)
            {
                sp_bgn1 = sp_que1[0];

                // 増加処理へ
                if(sp_bgn1 > 0)
                {
                    if(300 <= ppl1 + 30 * sp_bgn1)
                    {
                        ppl1 = 300;
                    }
                    else
                    {
                        ppl1 += 30 * sp_bgn1;
                    }
                }
                // 減少処理へ
                else if(sp_bgn1 < 0)
                {
                    ppl1 = 0;
                    sp_rdy1 = false;
                    sp_use1 = true
                }

                sp_que1.shift();
            }
        }
        // 増加処理
        else if(sp_bgn1 > 0)
        {
            // 増加
            if(yel1[0] < ppl1)
            {
                yel1[0] += 2;
            }
            // 終了
            else
            {
                yel1[0] = ppl1;
                sp_bgn1 = 0;
                if(300 <= yel1[0] && !sp_rdy1)
                {
                    sp_rdy1 = true;
                    sp_rdy_snd.play();
                }
            }
        }
        // 減少処理
        else if(sp_bgn1 < 0)
        {
            // 終了
            if(yel1[0] <= 0)
            {
                yel1[0] = 0;
                sp_use1 = false;
                sp_bgn1 = 0;
            }
            // 減少
            else
            {
                yel1[0] += sp_bgn1;
            }

            // 発動中エフェクト
            
        }

        if(space == 1 && sp_rdy1)
        {
            // レッドチーム
            if(team1 == 1)
            {
                if(scene == 2)
                {
                    hp_que1.push(-3);
                    sp_que1.push(-2);
                }
                else if(scene == 5)
                {
                    hp_que2.push(-3);
                    socket.emit('myAct', 0, -3, room);
                    sp_que1.push(-2);
                    socket.emit('myAct', 3, -2, room);
                }
                
                sp_use_snd.play();
            }
            // ブルーチーム
            else if(team1 == 2)
            {
                if(scene == 2)
                {
                    if(time - 5 < 0)
                    {
                        time = 0;
                    }
                    else
                    {
                        f_time -= 60 * 5;
                    }
                    sp_que1.push(-2);
                }
                else if(scene == 5)
                {
                    hp_que1.push(3);
                    socket.emit('myAct', 2, 3, room);

                    sp_que1.push(-2);
                    socket.emit('myAct', 3, -2, room);
                }
                heal.play(0, 1, 2);
            }
            else
            {
                sp_que1.push(-0.5);
                socket.emit('myAct', 3, -0.5, room);
                sp_use_snd.play();
            }
            space++;
        }
        else
        {
            space = 0;
        }

        yel1[1] = 200 * (yel1[0] / 300);
        yel1[2] = -0.136 * yel1[0];
        yel1[3] = 184 * (yel1[0] / 300);
        yel1[4] = -0.03 * yel1[0];

        // 灰
        fill(79);
        quad(x, y, 200 * s + x, -41 * s + y, 177 * s + x, y, -7 * s + x, 9 * s + y);

        // 黄
        if(sp_rdy1)
        {
            for(let i = 300; 0 < i; i--)
            {
                if(!sp_use1 && frameCount % 20 < 10)
                {
                    fill(255, 255 - i * 0.85+120, 120);
                }
                else
                {
                    fill(255, 255 - i * 0.85, 0);
                }
                yel1[0] = i;
                yel1[1] = 200 * (yel1[0] / 300);
                yel1[2] = -0.136 * yel1[0];
                yel1[3] = 184 * (yel1[0] / 300);
                yel1[4] = -0.03 * yel1[0];
                quad(x, y, yel1[1] * s + x, yel1[2] * s + y, (yel1[3] - 7) * s + x, (yel1[4] + 9) * s + y, -7 * s + x, 9 * s + y);
            }
            yel1[0] = 300;
        }
        else if(!sp_use1 && 6 <= no_miss)
        {
            fill(255, 120, 0);
        }
        else if(!sp_use1 && 3 <= no_miss)
        {
            fill(255, 255, 0);
        }
        else if(!sp_use1)
        {
            fill(198, 255, 121);
        }
        else
        {
            fill(244, 120, 0);
        }
        // fill(181, 255, 0);
        quad(x, y, yel1[1] * s + x, yel1[2] * s + y, (yel1[3] - 7) * s + x, (yel1[4] + 9) * s + y, -7 * s + x, 9 * s + y);

        // 枠
        noFill();
        stroke(30);
        strokeWeight(3);
        quad(x, y, 200 * s + x, -41 * s + y, 177 * s + x, y, -7 * s + x, 9 * s + y);
        noStroke();

        if(sp_rdy1)
        {
            if(scene == 2)
            {
                image(spacekey, 520, 30, 144, 64);
            }
            else if(scene == 5)
            {
                image(spacekey, 230, 10, 110, 48);
            }
        }
    }
    if(p == 2)
    {
        if(sp_bgn2 == 0)
        {
            if(sp_que2.length != 0)
            {
                sp_bgn2 = sp_que2[0];

                // 増加
                if(sp_bgn2 > 0)
                {
                    if(300 <= ppl2 + 30 * sp_bgn2)
                    {
                        ppl2 = 300;
                    }
                    else
                    {
                        ppl2 += 30 * sp_bgn2;
                    }
                }
                // 減少
                else if(sp_bgn2 < 0)
                {
                    ppl2 = 0;
                    sp_use2 = true;
                }

                sp_que2.shift();
            }
        }
        else if(sp_bgn2 > 0)
        {
            if(yel2[0] < ppl2)
            {
                yel2[0] += 2;
            }
            else
            {
                yel2[0] = ppl2;
                sp_bgn2 = 0;
            }
        }
        else if(sp_bgn2 < 0)
        {
            if(yel2[0] <= 0)
            {
                yel2[0] = 0;
                sp_use2 = false;
                sp_bgn2 = 0;
            }
            else
            {
                yel2[0] += sp_bgn2;
            }

            
        }

        yel2[1] = 200 * (yel2[0] / 300);
        yel2[2] = -0.136 * yel2[0];
        yel2[3] = 184 * (yel2[0] / 300);
        yel2[4] = -0.03 * yel2[0];

        // 灰
        fill(79);
        quad(x, y, 200 * s + x, -41 * s + y, 177 * s + x, y, -7 * s + x, 9 * s + y);

        // 黄
        fill(181, 255, 0);
        quad(x, y, yel2[1] * s + x, yel2[2] * s + y, (yel2[3] - 7) * s + x, (yel2[4] + 9) * s + y, -7 * s + x, 9 * s + y);

        // 枠
        noFill();
        stroke(30);
        strokeWeight(3);
        quad(x, y, 200 * s + x, -41 * s + y, 177 * s + x, y, -7 * s + x, 9 * s + y);
        noStroke();
    }
}

function lifeIcon(p, x, y)
{
    if(p == 1)
    {
        life = life1;
    }
    else if(p == 2)
    {
        life = life2;
    }
    
    imageMode(CENTER);
    for(let i = 0; i < 5; i++)
    {
        if(i < life)
        {
            image(full_heart, x + 35 * i, y, 35, 35);
        }
        else
        {
            image(empty_heart, x + 35 * i, y, 35, 35);
        }
    }
    imageMode(CORNER);
}

function monsDisp(p, x, y)
{
    if(p == 1)
    {
        team = team1;
        life = life1;
    }
    else if(p == 2)
    {
        team = team2;
        life = life2;
    }
    
    // ソロ用
    if(scene == 2)
    {
        imageMode(CENTER);
        if((5 - life) % 5 == 0)
        {
            image(grn_mons1, x, y);
        }
        else if((5 - life) % 5 == 1)
        {
            image(grn_mons2, x, y, 152, 170);
        }
        else if((5 - life) % 5 == 2)
        {
            image(grn_mons3, x, y, 240, 198);
        }
        else if((5 - life) % 5 == 3)
        {
            image(grn_mons4, x, y);
        }
        else if((5 - life) % 5 == 4)
        {
            image(grn_mons5, x, y - 20, 339, 270);
        }
    }
    // マルチ用
    else if(scene == 5)
    {
        imageMode(CENTER);
        if(team == 0)
        {
            if(5 - life == 0)
            {
                image(grn_mons1, x, y);
            }
            else if(5 - life == 1)
            {
                image(grn_mons2, x, y, 152, 170);
            }
            else if(5 - life == 2)
            {
                image(grn_mons3, x, y, 240, 198);
            }
            else if(5 - life == 3)
            {
                image(grn_mons4, x, y);
            }
            else if(5 - life == 4)
            {
                image(grn_mons5, x, y - 20, 339, 270);
            }
        }
        else if(team == 1)
        {
            if(5 - life == 0)
            {
                image(red_mons1, x, y);
            }
            else if(5 - life == 1)
            {
                image(red_mons2, x, y, 140, 225);
            }
            else if(5 - life == 2)
            {
                image(red_mons3, x, y, 154, 222);
            }
            else if(5 - life == 3)
            {
                image(red_mons4, x, y, 256, 245);
            }
            else if(5 - life == 4)
            {
                image(red_mons5, x, y, 348, 256);
            }
        }
        else if(team == 2)
        {
            if(5 - life == 0)
            {
                image(blu_mons1, x, y);
            }
            else if(5 - life == 1)
            {
                image(blu_mons2, x, y);
            }
            else if(5 - life == 2)
            {
                image(blu_mons3, x, y, 203, 247);
            }
            else if(5 - life == 3)
            {
                image(blu_mons4, x, y, 207, 229);
            }
            else if(5 - life == 4)
            {
                image(blu_mons5, x, y - 20, 298, 315);
            }
        }
        else if(team == 3)
        {
            if(5 - life == 0)
            {
                image(yel_mons1, x, y);
            }
            else if(5 - life == 1)
            {
                image(yel_mons2, x, y, 194, 160);
            }
            else if(5 - life == 2)
            {
                image(yel_mons3, x - 20, y - 20, 180, 240);
            }
            else if(5 - life == 3)
            {
                image(yel_mons4, x, y, 225, 193);
            }
            else if(5 - life == 4)
            {
                image(yel_mons5, x, y - 20, 315, 225);
            }
        }
        else if(team == 4)
        {
            if(5 - life == 0)
            {
                image(ppl_mons1, x, y, 188, 160);
            }
            else if(5 - life == 1)
            {
                image(ppl_mons2, x, y, 156, 213);
            }
            else if(5 - life == 2)
            {
                image(ppl_mons3, x, y - 20, 180, 240);
            }
            else if(5 - life == 3)
            {
                image(ppl_mons4, x, y - 20, 169, 234);
            }
            else if(5 - life == 4)
            {
                image(ppl_mons5, x, y, 300, 225);
            }
        }
    }
    imageMode(CORNER);
}

function sceneChange(x)
{
    if(x == 1)
    {
        click.play();
        scene = 1;
    }
    else if(x == 2)
    {
        warp.play();
        delCreateInput();
        scene = 2;
        resetTime(-2);
    }
    else if(x == 3)
    {
        playing_bgm.stop();
        scene = 3;
        resetTime(0);
    }
    else if(x == 4)
    {
        click.play();
        scene = 4;
        resetTime(0);
    }
    else if(x == 5)
    {
        warp.play();
        move_time = false;
        scene = 5;
        resetTime(-6);
    }
    else if(x == 6)
    {
        playing_bgm.stop();
        scene = 6;
        resetTime(0);
    }

    solo_btn.visible = false;
    mult_btn.visible = false;
    credit_btn.visible = false;
    rule_btn.visible = false;
    rank_btn.visible = false;
    right_btn.visible = false;
    left_btn.visible = false;

    for(let i = 0; i < 10; i++)
    {
        flags[i] = true;
    } 
}

function frame()
{
    rectMode(CENTER, CENTER);
    strokeWeight(8);
    stroke(255);
    fill(0);
    rect(450, 495, 645, 155, 35);
    noStroke();
    rectMode(CORNER, CORNER);
}

function message(x, y)
{
    textAlign(CENTER, CENTER);
    if(y > 0)
    {
        textSize(y);
    }
    else
    {
        textSize(70);
    }
    fill(255);
    text(x, 450, 490);
    textAlign(CORNER, CORNER);
}

function colorTyped(){
    let html = '';
    if(idx1 > 0)
    {
        for(let i = 0; i < idx1; i++)
        {
            html += wordR[i][pattern[i]];
        }
    }
    for(let i = 0; i < wordR[idx1][pattern[idx1]].length; i++)
    {
        html += wordR[idx1][pattern[idx1]][i];
    }
    for(let i = idx1 + 1; i < wordR.length; i++)
    {
      html += wordR[i][pattern[i]];
    }
    return html;
}

function drawQuestion()
{
    // 日本語
    textFont('Arial');
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    text(questions[rand_num][0], 450, 480);

    // ローマ字
    texts = colorTyped();
    textFont(regular_font);
    textSize(30);
    for(let i = 0; i < texts.length; i++)
    {
        if(0 < char_pos && i < char_pos)
        {
            fill(0);
        }
        else
        {
            fill(255);
        }
        text(texts[i], 450 - texts.length * 8 + i * 20, 530);
    }
    textAlign(CORNER, CORNER);
    textFont(hangyaku_font);
}

function kanaToRoman(kana) 
{
    const romanMap = 
    {
        'あ': ['a'], 'い': ['i', 'yi'], 'う': ['u', 'wu'], 'え': ['e'], 'お': ['o'],
        'か': ['ka', 'ca'], 'き': ['ki'], 'く': ['ku', 'cu', 'qu'], 'け': ['ke'], 'こ': ['ko', 'co'],
        'さ': ['sa'], 'し': ['si', 'shi', 'ci'], 'す': ['su'], 'せ': ['se', 'ce'], 'そ': ['so'],
        'た': ['ta'], 'ち': ['ti', 'chi'], 'つ': ['tu', 'tsu'], 'て': ['te'], 'と': ['to'],
        'な': ['na'], 'に': ['ni'], 'ぬ': ['nu'], 'ね': ['ne'], 'の': ['no'],
        'は': ['ha'], 'ひ': ['hi'], 'ふ': ['fu', 'hu'], 'へ': ['he'], 'ほ': ['ho'],
        'ま': ['ma'], 'み': ['mi'], 'む': ['mu'], 'め': ['me'], 'も': ['mo'],
        'や': ['ya'], 'ゆ': ['yu'], 'よ': ['yo'],
        'ら': ['ra'], 'り': ['ri'], 'る': ['ru'], 'れ': ['re'], 'ろ': ['ro'],
        'わ': ['wa'], 'ゐ': ['wyi'], 'ゑ': ['wye'], 'を': ['wo'], 'ん': ['nn', 'xn', 'n'],
        'が': ['ga'], 'ぎ': ['gi'], 'ぐ': ['gu'], 'げ': ['ge'], 'ご': ['go'],
        'ざ': ['za'], 'じ': ['ji', 'zi'], 'ず': ['zu'], 'ぜ': ['ze'], 'ぞ': ['zo'],
        'だ': ['da'], 'ぢ': ['di'], 'づ': ['du'], 'で': ['de'], 'ど': ['do'],
        'ば': ['ba'], 'び': ['bi'], 'ぶ': ['bu'], 'べ': ['be'], 'ぼ': ['bo'],
        'ぱ': ['pa'], 'ぴ': ['pi'], 'ぷ': ['pu'], 'ぺ': ['pe'], 'ぽ': ['po'],
        'うぁ': ['wha','uxa','wa'], 'うぃ': ['whi','uxi','wi'], 'うぇ': ['whe','uxe','we'], 'うぉ': ['who','uxo','wo'],
        'きゃ': ['kya', 'kixya'], 'きぃ': ['kyi','kixi'], 'きゅ': ['kyu','kixu'], 'きぇ': ['kye','kixe'], 'きょ': ['kyo','kixo'],
        'くぁ': ['qa', 'qwa','kuxa'], 'くぃ': ['qi', 'qwi','kuxi'], 'くぇ': ['qe', 'qwe','kuxe'], 'くぉ': ['qo', 'qwo','kuxo'], 'くゃ': ['qya','kuxya'], 'くゅ': ['qyu','kuxyu'], 'くょ': ['qyo','kuxyo'],
        'しゃ': ['sya', 'sha','sixya'], 'しぃ': ['syi','sixi'], 'しゅ': ['syu', 'shu','sixyu'], 'しぇ': ['sye', 'she','sixe'], 'しょ': ['syo', 'sho','sixyo'],
        'つぁ': ['tsa','tuxa'], 'つぃ': ['tsi','tuxi'], 'つぇ': ['tse','tuxe'], 'つぉ': ['tso','tuxo'],
        'ちゃ': ['tya', 'cha','tixya'], 'ちぃ': ['tyi','tixi'], 'ちゅ': ['tyu', 'chu','tixyu'], 'ちぇ': ['tye', 'che','tixe'], 'ちょ': ['tyo', 'cho','tixyo'],
        'てゃ': ['tha','texya'], 'てぃ': ['thi','texi'], 'てゅ': ['thu','texyu'], 'てぇ': ['the','texe'], 'てょ': ['tho','texyo'],
        'とぁ': ['twa','toxa'], 'とぃ': ['twi','toxi'], 'とぅ': ['twu','toxu'], 'とぇ': ['twe','toxe'], 'とぉ': ['two','toxo'],
        'ひゃ': ['hya','hixya'], 'ひぃ': ['hyi','hixi'], 'ひゅ': ['hyu','hixyu'], 'ひぇ': ['hye','hixe'], 'ひょ': ['hyo','hixyo'],
        'ふぁ': ['fa','huxa'], 'ふぃ': ['fi','huxi'], 'ふぇ': ['fe','huxe'], 'ふぉ': ['fo','huxo'],
        'にゃ': ['nya','nixya'], 'にぃ': ['nyi','nixi'], 'にゅ': ['nyu','nixyu'], 'にぇ': ['nye','nixe'], 'にょ': ['nyo','nixyo'],
        'みゃ': ['mya','mixya'], 'みぃ': ['myi','mixi'], 'みゅ': ['myu','mixyu'], 'みぇ': ['mye','mixe'], 'みょ': ['myo','mixyo'],
        'りゃ': ['rya','rixya'], 'りぃ': ['ryi','rixi'], 'りゅ': ['ryu','rixyu'], 'りぇ': ['rye','rixe'], 'りょ': ['ryo','rixyo'],
        'ヴぁ': ['va'], 'ヴぃ': ['vi'], 'ヴ': ['vu'], 'ヴぇ': ['ve'], 'ヴぉ': ['vo'],
        'ぎゃ': ['gya','gixya'], 'ぎぃ': ['gyi','gixi'], 'ぎゅ': ['gyu','gixyu'], 'ぎぇ': ['gye','gixe'], 'ぎょ': ['gyo','gixyo'],
        'ぐぁ': ['gwa','guxa'], 'ぐぃ': ['gwi','guxi'], 'ぐぅ': ['gwu','guxu'], 'ぐぇ': ['gwe','guxe'], 'ぐぉ': ['gwo','guxo'],
        'じゃ': ['ja', 'zya','zixya'], 'じぃ': ['jyi', 'zyi','zixi'], 'じゅ': ['ju', 'zyu','zixyu'], 'じぇ': ['je', 'zye','zixe'], 'じょ': ['jo', 'zyo','zixyo'],
        'でゃ': ['dha','dexya'], 'でぃ': ['dhi','dexi'], 'でゅ': ['dhu','dexyu'], 'でぇ': ['dhe','dexe'], 'でょ': ['dho','dexyo'],
        'ぢゃ': ['dya','dixya'], 'ぢぃ': ['dyi','dixi'], 'ぢゅ': ['dyu','dixyu'], 'ぢぇ': ['dye','dixe'], 'ぢょ': ['dyo','dixyo'],
        'びゃ': ['bya','bixya'], 'びぃ': ['byi','bixyi'], 'びゅ': ['byu','bixyu'], 'びぇ': ['bye','bixe'], 'びょ': ['byo','bixyo'],
        'ぴゃ': ['pya','pixya'], 'ぴぃ': ['pyi','pixyi'], 'ぴゅ': ['pyu','pixyu'], 'ぴぇ': ['pye','pixe'], 'ぴょ': ['pyo','pixyo'],
        'ぁ': ['la', 'xa'], 'ぃ': ['li', 'xi'], 'ぅ': ['lu', 'xu'], 'ぇ': ['le', 'xe'], 'ぉ': ['lo', 'xo'],
        'ゃ': ['lya', 'xya'], 'ゅ': ['lyu', 'xyu'], 'ょ': ['lyo', 'xyo'], 'っ': ['ltu', 'xtu'],
        'ー': ['-'], ',': [','], '.': ['.'], '&#12289;': [','], '&#12290;': ['.'],
        '&#12539;': ['/'], '&#12289;': [','], '&#12290;': ['.'], '&#12539;': ['/']
    };
  
    // 文字を文字列型にする
    let remStr = String(kana);
    let slStr;
    let roman;
    let next;
    let result = [];
  
    // 分割する
    function splice() 
    {
        // 1文字目を取り出す
        let oneChar = remStr.slice(0, 1);
        // 2文字目以降をremStrとする
        remStr = remStr.slice(1);
        return oneChar;
    }
  
    //小文字を取り出す
    function isSmallChar() 
    {
        return !!remStr.slice(0, 1).match(/^[ぁぃぅぇぉゃゅょ]$/);
    }
  
    while (remStr) 
    {
        // slStrに1文字目を入れる
        slStr = splice();
        // nextに2文字目を入れる
      next = romanMap[remStr.slice(0, 1)];
        // 1文字目が’っ'だった場合
        if(slStr == 'っ') 
        {
            if(!remStr || remStr.match(/^[,.]/) || !next || next[0].match(/^[aiueon]/))
            {
                roman = [...romanMap[slStr]];
                result.push(roman);
            }
            else
            {
                slStr = splice();
                if(isSmallChar())
                {
                    slStr += splice();
                } 
                roman = [...romanMap[slStr].map(str => str.slice(0, 1) + str)];
                result.push(roman);
            }
        }
        else
        {
            if (isSmallChar())
            {
                slStr += splice();
            }
            if (slStr == '&')
            {
                slStr += remStr.slice(0, 7);
                remStr = remStr.slice(7);
            }
            roman = romanMap[slStr] ? [...romanMap[slStr]] : [...slStr];
            if(slStr == 'ん')
            {
                if (!remStr)
                {
                    roman.pop();
                }
                else
                {
                    if(next[0].match(/^[aiueony]/))
                    {
                        roman.pop();
                    }
                }
            }
            result.push(roman);
        }
    }
    return result;
}

function resetTime(x)
{
    f_time = x * 60;
    time = ((Math.floor((f_time / 60) * 10)) / 10);
}

function selectTeam()
{
    imageMode(CENTER);
    image(paper, 450, 205, 580, 400);
    fill(0);
    textSize(50);
    text('Wanted!!', 270, 90);
    textSize(40);
    text('なまえ', 230, 150);
    if(scene == 4)
    {
        text('ルームID', 230, 250);
        textSize(25);
        text('だれかと...何も入力しない\nお友達と...共通の4ケタの数字', 220, 330);
    }
    if(flags[0])
    {
        flags[0] = false;
        user1 = createInput();
        user1.position(230, 175);
        user1.size(180, 30);
        if(scene == 4)
        {
            room1 = createInput();
            room1.position(230, 270);
            room1.size(180, 30);
        }
    }
    textAlign(CENTER, CENTER);
    textSize(40);
    if(team1 == 0)
    {
        text('グリーンチーム', 565, 65);
        image(grass, 565, 170, 260, 160);
        image(grn_mons1, 570, 170, 133, 118);
        textAlign(CORNER, CORNER);
        textSize(30);
        text('スキル\n単語の難易度が簡単になる。', 460, 270);
    }
    else if(team1 == 1)
    {
        text('レッドチーム', 565, 65);
        image(volcano, 565, 170, 260, 160);
        image(red_mons1, 570, 170, 133, 118);
        textAlign(CORNER, CORNER);
        textSize(30);
        text('スキル\n相手のモンスターにダメージ\nを与える。', 460, 270);
    }
    else if(team1 == 2)
    {
        text('ブルーチーム', 565, 65);
        image(ocean, 565, 170, 260, 160);
        image(blu_mons1, 570, 170, 110, 125);
        textAlign(CORNER, CORNER);
        textSize(30);
        if(scene == 1)
        {
            text('スキル\n制限時間が少し延長される。', 460, 270);

        }
        else if(scene == 4)
        {
            text('スキル\n自分のモンスターの体力が\n回復する。', 460, 270);
        }
    }
    else if(team1 == 3)
    {
        text('イエローチーム', 565, 65);
        image(desert, 565, 170, 260, 160);
        image(yel_mons1, 570, 170, 140, 125);
        textAlign(CORNER, CORNER);
        textSize(30);
        text('スキル\n単語の難易度が難しくなるが、\n相手へのダメージが2倍になる。', 460, 270);
    }
    else if(team1 == 4)
    {
        text('パープルチーム', 565, 65);
        image(cemetry, 565, 170, 260, 160);
        image(ppl_mons1, 570, 170, 140, 125);
        textAlign(CORNER, CORNER);
        textSize(30);
        text('スキル\nミスするとダメージを受けるが、\n相手へのダメージが2倍になる。', 460, 270);
    }
    imageMode(CORNER, CORNER);

    right_btn.visible = true;
    left_btn.visible = true;

    // 右ボタン
    if(right_btn.mouse.presses() || right == 1)
    {
        team1 = (team1 + 1) % 5
        select.play();
        right++;
    }
    else
    {
        right = 0;
    }

    // 左ボタン
    if(left_btn.mouse.presses() || left == 1)
    {
        if(team1 == 0)
        {
            team1 = 4;
        }
        else
        {
            team1 -= 1;
        }
        select.play();
        left++;
    }
    else
    {
        left = 0;
    }
}

function matchTeam(p, x, y)
{
    if(p == 1)
    {
        team = team1;
        if(user1.value() != 0)
        {
            user = user1.value();
        }
        else
        {
            user = 'プレイヤー1';
        }
    }
    else if(p == 2)
    {
        team = team2;
        user = user2;
    }

    imageMode(CENTER);
    image(paper, x, y, 300, 400);
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(0);
    text('Wanted!!', x + 5, y - 145);
    textAlign(CORNER, CORNER);
    if(team == -1)
    {
        image(land, x, y - 45, 260, 160);
        textSize(100);
        fill(255);
        text('?', x - 10, y - 10);
        fill(0);
    }
    else if(team == 0)
    {
        image(grass, x, y - 45, 260, 160);
        image(grn_mons1, x, y - 45, 133, 118);
    }
    else if(team == 1)
    {
        image(volcano, x, y - 45, 260, 160);
        image(red_mons1, x, y - 45, 133, 118)
    }
    else if(team == 2)
    {
        image(ocean, x, y - 45, 260, 160);
        image(blu_mons1, x, y - 45, 110, 125);
    }
    else if(team == 3)
    {
        image(desert, x, y - 45, 260, 160);
        image(yel_mons1, x, y - 45, 140, 125);
    }
    else if(team == 4)
    {
        image(cemetry, x, y - 45, 260, 160);
        image(ppl_mons1, x, y - 45, 140, 125);
    }
    imageMode(CORNER);
    textSize(35);
    text('Name: ' + user, x - 105, y + 65);
    text('Room: ' + room1.value(), x - 105, y + 125);
}

function leftTimer()
{
    image(nokori, 360, 5, 50, 40);
    textAlign(CENTER, CENTER);
    strokeWeight(5);
    textSize(70);
    fill(255);
    stroke(0);
    if(scene == 2)
    {
        if(time < 0)
        {
            text(int(left_time), 450, 40);
        }
        else if(0 <= time && time < left_time)
        {
            text(int(left_time - time), 450, 40);
        }
        else
        {
            text('0', 450, 40);
        }
    }
    else if(scene == 5)
    {
        textSize(90);
        text('∞', 450, 40);
    }
    noStroke();
    image(byou, 485, 40, 22, 41);
}

function delCreateInput()
{
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.remove());
}

// r...順位, x, y...座標, s...拡大率
function rankDraw(r, x, y, s)
{
    textAlign(CORNER, CENTER);
    imageMode(CENTER);
    // 1～3位
    if(0 <= r && r <= 2)
    {
        textSize(40);
        image(crown[r], x, y, 70, 70);
        image(icons[ranking[r].color], x + 50, y, 45, 45);
        text(ranking[r].name, x + 80, y);
        text(ranking[r].score + 'pt', x + 250, y);
    }
    else
    {
        textSize(30);
        text(r + 1 + '位', x + 2, y);
        image(icons[ranking[r].color], x + 70, y, 38, 38);
        text(ranking[r].name, x + 100, y);
        text(ranking[r].score + 'pt', x + 280, y);
    }
    imageMode(CORNER);
    textAlign(CORNER, CORNER);
}

function btnDele()
{
    solo_btn.visible = false;
    mult_btn.visible = false;
    rank_btn.visible = false;
    rule_btn.visible = false;
    credit_btn.visible = false;
}