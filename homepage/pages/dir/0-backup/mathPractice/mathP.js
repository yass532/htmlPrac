
/* 各数字ボタンを格納 */
const numBtn = document.querySelectorAll(".numBtn");
/* 回答ボックスを取得 */
let answer = document.getElementById("answer");

/* 数字ボタンを押したときの処理 */
function pushNumBtn(){
 numBtn.forEach(index => {
  index.addEventListener("click", () => {
   answer.innerHTML = index.dataset.indexId;
   /*console.log(index.dataset.indexId);*/
  })
 })
}

/* 時間計測処理 */
function countTime() {
 let time = $("#time");
 time = 0;
}

/* ここからメイン処理 */
$(function() {
 /*
 1. タイトル表示
 2. 難易度選択
 3. スタートボタン
 4. 3カウントダウン
 5. 計算問題開始
 6. 問題終了
 7. 結果表示
 */

 /* 1.タイトル表示 */
 
 
 /*  */
 
});

