
/* 数字ボタンを格納 */
const numBtn = document.querySelectorAll(".numBtn");

var answer = document.getElementById("answer");

/* 数字ボタンを押したときの処理 */
numBtn.forEach(index => {
 index.addEventListener("click", () => {
  answer.innerHTML = index.dataset.indexId;
  /*console.log(index.dataset.indexId);*/
 })
})
