/* トップページまでのPATH */
var path = document.getElementById("header").title;

/* 各ページに表示するタイトル */
var title = document.getElementById("header").textContent;

/* 表示したいHTMLをバッククォーテーション（`）で囲む */

/* ヘッダー */
var header = `
<header>
 <h1 id='header-title'><a href='` + path + `index.html'>` + title + `</a></h1>
 <nav id="top-nav">
  <ul id="header-menu">
   <li><a href="` + path + `index.html">HOME</a></li>
   <li><a href="` + path + `pages/about/about.html">ABOUT</a></li>
   <li><a href="` + path + `pages/menu/menu.html">MENU</a></li>
   <li><a href="` + path + `pages/contact/contact.html">CONTACT</a></li>
  </ul>
 </nav>
</header>
`;

/* フッター */
var footer = `
<footer>
 <p>◎ All rights reserved by yasu.</p>
</footer>
`;


/* ヘッダーとフッターをHTMLに書き込み */
document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
