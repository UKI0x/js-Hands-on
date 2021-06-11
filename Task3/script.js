'use strict';


const ul = document.getElementById("ul");

const liLength　= 2;

for (let i = 1; i <= liLength; i++){
	const li = document.createElement("li");
	const a = document.createElement("a");
	const img = document.createElement('img');

	a.href = `a${i}.html`;
	a.textContent = `a${i}`;
	img.src = "/img/bookmark.pmg";
	ul.appendChild(li).appendChild(a).prepend(img);
}

