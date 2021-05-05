	'use strict';
	
	//ulタグを取得
	const newList = document.getElementById("js_list");
	const newList02 = document.getElementById("js_list02");
	const newList03 = document.getElementById("js_list03");

	//ulに入れる中身を作成
	//newList
	const li = document.createElement("li");
	const a = document.createElement("a");
	
	//newList02
	const li02 = document.createElement("li");
	const a02 = document.createElement("a");
	const img02 = document.createElement("img");

	//newList03
	//newList02
	const li03 = document.createElement("li");
	const a03 = document.createElement("a");
	const img03 = document.createElement("img");

	//aタグの属性を編集
	//newList
	a.href = "1.html";


	//newList02
	//aタグの属性を編集
	a02.href = "1.html";
	//aタグ直下にテキストを追加
	a02.textContent = "これです";
	//imgタグの属性を編集
	img02.src = "bookmark.png";
	img02.alt = "ブックマーク";

	//newList03
	//aタグの属性を編集
	a03.href = "1.html";
	//aタグ直下にテキストを追加
	a03.textContent = "これです";
	//imgタグの属性を編集
	img03.src = "bookmark.png";
	img03.alt = "ブックマーク";
	
	//子要素を指定
	newList.appendChild(li).appendChild(a).insertAdjacentHTML('afterbegin','<img src="bookmark.png" alt="ブックマーク" />これです');

	newList02.appendChild(li02).appendChild(a02).prepend(img02);

	newList03.appendChild(li03).appendChild(a03).insertAdjacentElement("afterbegin", img03);