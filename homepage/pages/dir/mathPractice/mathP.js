/* グローバル変数 */

let scene = 0;
/* 各シーンについて、
// 0: タイトル
// 1: 何か
// 2: ゲーム画面（＋カウントダウン）
// 3: ゲームオーバー
// 4: ランキング
*/

/* 初期設定 */

$(function() {
 
 if(scene == 0){
  $("#qBox").click(function() {
   $("#quizScene").hide();
  });
 }
 if(scene == 1){
  $(".numBtn").click(function() {
   $(this).css("background-color", "green");
  });
 }
 
})