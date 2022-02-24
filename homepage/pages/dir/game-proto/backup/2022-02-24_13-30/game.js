
const ctx = document.getElementById("screen").getContext("2d");

// FPS関連の定義
let prevFps = 0;
let fps = 0;
let prevTime = Date.now();

// ゲームオブジェクトの定義
const gameObjects = [
 { type: "player", x: 30, y: 50 },
 { type: "fps" },
 { type: "gameInput" }
]; // type、x、yを定義？


/************/
/* 入力関連 */
/************/

/* キーボード */
const keyCodes = { // キーコードの定義
 65: "left",
 87: "top",
 68: "right",
 83: "bottom",
 32: "a",
 16: "b"
};

const keyStatus = { // キーボードステータスの定義
 left: false,
 right: false,
 top: false,
 bottom: false,
 a: false,
 b: false
};

/* 各キーの認識 */
window.addEventListener ("keydown", (e) => {
 if(!(e.keyCode in keyCodes)) return;
 
 keyStatus[keyCodes[e.keyCode]] = true;
}, false);

window.addEventListener ("keyup", (e) => {
 if(!(e.keyCode in keyCodes)) return;
 
 keyStatus[keyCodes[e.keyCode]] = false;
}, false);

/**************/


// 各ゲームオブジェクトの挙動？
const functions = {
 
 // player の挙動
 player: (obj) => {
  obj.x += 0.2;
  
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(obj.x, obj.y);
  ctx.lineTo(obj.x, obj.y + 10);
  ctx.stroke();
 },
 
 // FPS を画面に表示
 fps: (obj) => {
  ctx.fillText("FPS: " + prevFps.toString(), 10, 15);
 },
 
 // キー入力を表示
 gameInput: () => {
  let s = "";
  s += gameInput.left ? "L" : "_";
  s += gameInput.top ? "T" : "_";
  s += gameInput.right ? "R" : "_";
  s += gameInput.bottom ? "B" : "_";
  s += gameInput.a ? "A" : "_";
  s += gameInput.b ? "B" : "_";
  ctx.fillText("controller: " + s, 10, 30);
 },
}


/********************************************/
/*************** メインループ ***************/
/********************************************/
function gameLoop() {
 const begin = Date.now();
 
 ctx.clearRect(0, 0, 320, 240); // 画面の消去
 
 /* ゲームロジック */
 
 // FPS の計算
 if(begin - prevTime > 1000) {
  prevFps = fps;
  fps = 1;
  prevTime = begin;
 }
 else {
  fps++;
 }
 
 // キーボードから入力を生成する
 gameInput = {
  left: keyStatus.left,
  right: keyStatus.right,
  top: keyStatus.top,
  bottom: keyStatus.bottom,
  a: keyStatus.a,
  b: keyStatus.b
 }
 
 // 各ゲームオブジェクトの処理
 gameObjects.forEach((obj) => {
  functions[obj.type](obj);
 })
 
 const end = Date.now();
 setTimeout(gameLoop, 33 - (end - begin)); // 0.33msから実際かかった時間を引いた秒数待つ
 
}


gameLoop();