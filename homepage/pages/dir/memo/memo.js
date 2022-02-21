/* 読込 */
function load() {
 var MemoData = "";
 if (!localStorage.getItem("MemoData")) {
  MemoData = "メモは登録されていません。";
 }
 else {
  MemoData = localStorage.getItem("MemoData");
 }
 document.form1.Memo.value = MemoData;
}

/* 保存 */
function save() {
 var MemoData = document.form1.Memo.value;
 localStorage.setItem("MemoData", MemoData);
}
