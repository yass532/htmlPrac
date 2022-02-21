//let button = document.getElementById("button");
//let d_clock = document.getElementById("d_clock");
//const displayOriginal = d_clock.style.display;

// メイン関数
function clock(){
 
 // 曜日を表す各文字列の配列
 var weeks = new Array("Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat");
 
 // 現在日時を表すインスタンスを取得
 var now = new Date();
 
 // 年
 var y = now.getFullYear();
 
 // 月
 var mo = now.getMonth() + 1;
 
 // 日
 var d = now.getDate();
 
 // 曜日
 var w = weeks[now.getDay()];
 
 // 時
 var h = now.getHours();
 
 // 分
 var mi = now.getMinutes();
 
 // 秒
 var s = now.getSeconds();
 
 
 // 日付時刻文字列のなかで常に2桁にしておきたい部分は、ここで処理
 if(mo < 10) mo = "0" + mo;
 if(d < 10) d = "0" + d;
 if(mi < 10) mi = "0" + mi;
 if(s < 10) s = "0" + s;
 
 document.getElementById("clock_date").innerHTML = y + "/" + mo + "/" + d + "(" + w + ")";
 document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
 document.getElementById("clock_frame").style.fontSize = window.innerWidth / 10 + "px";
 
}

//if

// 上記のclock関数を1000ミリ秒ごと（毎秒）に実行する
setInterval(clock, 1000);
