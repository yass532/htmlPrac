const canvas = document.getElementById("canvas"); // ID「canvas」を取得
const c = canvas.getContext("2d");

// キャンバスのサイズ
let canvas_width = 300;
let canvas_height = 400;

// ボールの初期ステータス
let ball_x = canvas_width / 2;
let ball_y = canvas_height * 2 / 3;
let ball_r = canvas_width / 40;
const ball_color = "#F92100"

// ボール速度
let ball_speed_x = 3;
let ball_speed_y = 3;
const ball_speed_delta = 0.5;
const ball_speed_x_max = 10;
const ball_speed_y_max = 10;

// バーの初期ステータス
let bar_width = canvas_width / 6;
let bar_height = 10;
let bar_x = canvas_width / 2 - bar_width / 2;
let bar_y = canvas_height * 9 / 10;
const bar_color = "#FFBCBD"
let bar_speed = 8;

// ブロックの座標
let block = [
 [ 25,  20, false, "#B9F700"],
 [ 75,  20, false, "#B9F700"],
 [125,  20, false, "#B9F700"],
 [175,  20, false, "#B9F700"],
 [225,  20, false, "#B9F700"],

 [ 25,  50, false, "#62ED00"],
 [ 75,  50, false, "#62ED00"],
 [125,  50, false, "#62ED00"],
 [175,  50, false, "#62ED00"],
 [225,  50, false, "#62ED00"],

 [ 25,  80, false, "#00E57E"],
 [ 75,  80, false, "#00E57E"],
 [125,  80, false, "#00E57E"],
 [175,  80, false, "#00E57E"],
 [225,  80, false, "#00E57E"],

 [ 25, 110, false, "#00E1E5"],
 [ 75, 110, false, "#00E1E5"],
 [125, 110, false, "#00E1E5"],
 [175, 110, false, "#00E1E5"],
 [225, 110, false, "#00E1E5"]
]

// ブロックの大きさ
let block_width = 40;
let block_height = 20;

// 左右キーの認識
let left_pressed = false;
let right_pressed = false;

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);



function keyDown(e){
 if(e.code == "ArrowRight"){
  right_pressed = true;
 }
 if(e.code == "ArrowLeft"){
  left_pressed = true;
 }
}


function keyUp(e){
 if(e.code == "ArrowRight"){
  right_pressed = false;
 }
 if(e.code == "ArrowLeft"){
  left_pressed = false;
 }
}


setInterval(function(){
 eraseCanvas(); // キャンバスを消す
 drawBar(); // バーを描画
 drawBall(); // ボールを描画
 drawBlock();
}, 30);


function eraseCanvas(){
 c.clearRect(0, 0, canvas_width, canvas_height);
}


function drawBar(){
 
 if(right_pressed == true){
  bar_x += bar_speed;
 }
 if(left_pressed == true){
  bar_x -= bar_speed;
 }
 
 c.fillStyle = bar_color;
 c.fillRect(bar_x, bar_y, bar_width, bar_height);
}


function drawBall(){

 // 跳ね返り処理
 // 右
 if(canvas_width - ball_r < ball_x + ball_speed_x){
  ball_speed_x = -ball_speed_x;
 }
 // 下
 //if(canvas_height - ball_r < ball_y + ball_speed_y){
 // ball_speed_y = -ball_speed_y;
 //}
 // 左
 if(0 + ball_r > ball_x + ball_speed_x){
  ball_speed_x = -ball_speed_x;
 }
 // 上
 if(0 + ball_r > ball_y + ball_speed_y){
  ball_speed_y = -ball_speed_y;
 }
 // バー
 if(ball_x >= bar_x && ball_x <= bar_x + bar_width){
  if(ball_y + ball_r >= bar_y && ball_y + ball_r <= bar_y + bar_height){
   ball_speed_y = -ball_speed_y;
  }
 }

 // ブロックとの接触処理
 for(let i=0; i<block.length; i++){
  if(block[i][2] == false){
  
   if(ball_x + ball_r >= block[i][0] && ball_x <= block[i][0]){
    if(ball_y >= block[i][1] && ball_y <= block[i][1] + block_height){
     block[i][2] = true;
     ball_speed_x = -ball_speed_x;
     ballSpeedChange();
    }
   }
   if(ball_x >= block[i][0] + block_width && ball_x - ball_r <= block[i][0] + block_width){
    if(ball_y >= block[i][1] && ball_y <= block[i][1] + block_height){
     block[i][2] = true;
     ball_speed_x = -ball_speed_x;
     ballSpeedChange();
    }
   }
   if(ball_y + ball_r >= block[i][1] && ball_y <= block[i][1]){
    if(ball_x >= block[i][0] && ball_x <= block[i][0] + block_width){
     block[i][2] = true;
     ball_speed_y = -ball_speed_y;
     ballSpeedChange();
    }
   }
   if(ball_y >= block[i][1] + block_height && ball_y - ball_r <= block[i][1] + block_height){
    if(ball_x >= block[i][0] && ball_x <= block[i][0] + block_width){
     block[i][2] = true;
     ball_speed_y = -ball_speed_y;
     ballSpeedChange();
    }
   }
  
  }
 }
 
 if(ball_speed_x > ball_speed_x_max){
  ball_speed_x = ball_speed_x_max;
 } else if(ball_speed_x < -ball_speed_x_max){
  ball_speed_x = -ball_speed_x_max;
 }
 
 if(ball_speed_y > ball_speed_y_max){
  ball_speed_y = ball_speed_y_max;
 } else if(ball_speed_y < -ball_speed_y_max){
  ball_speed_y = -ball_speed_y_max;
 }

 ball_x = ball_x + ball_speed_x;
 ball_y = ball_y + ball_speed_y;
 
 c.beginPath();
 c.fillStyle = ball_color;
 c.arc(ball_x, ball_y, ball_r, 0, 2*Math.PI); // 円や円弧の描画
 c.fill(); // 塗りつぶし

}


function ballSpeedChange(){
 if(ball_speed_x > 0){
  ball_speed_x += ball_speed_delta;
 } else{
  ball_speed_x -= ball_speed_delta;
 }
 if(ball_speed_y > 0){
  ball_speed_y += ball_speed_delta;
 } else{
  ball_speed_y -= ball_speed_delta;
 }
}


function drawBlock(){
 for(let i=0; i<block.length; i++){
  if(block[i][2] == false){
   c.fillStyle = block[i][3];
   c.fillRect(block[i][0], block[i][1], block_width, block_height)
  }
 }
}

