	'use strict';
	
	//ulタグを取得
	const newList = document.getElementById("js_list");

	//ulに入れる中身を作成
	const li = document.createElement("li");
	const a = document.createElement("a");
	const img = document.createElement("img");

	//タグの属性を編集
	a.href = "1.html";

	img.src = "bookmark.png";
	img.alt = "ブックマーク";
	img.innerHTML = "これです";
	
	//子要素を指定
	newList.appendChild(li).appendChild(a).appendChild(img);