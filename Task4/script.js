'use strict';


const ul = document.getElementById("ul");
const ul = document.getElementById("js-app");
const fragment = document.createDocumentFragment();

const liArray = [
	{ to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
	{ to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" }
];

liArray.forEach(list => {
	let li = document.createElement("li");
	let a = document.createElement("a");
	let img = document.createElement('img');

	a.href = `/${list.to}`;
	a.textContent = list.text;
	img.src = list.img;
	img.alt = list.alt;

	fragment.appendChild(li).appendChild(a).prepend(img);
});

ul.appendChild(fragment);
