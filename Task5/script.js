const app = document.getElementById("js-app");
const fragment = document.createDocumentFragment();

const data = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" }
];

const getData = new Promise((resolve) => resolve(data));

getData.then(() => {
  data.forEach((list) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.href = `/${list.to}`;
    a.textContent = list.text;
    img.src = list.img;
    img.alt = list.alt;

    fragment.appendChild(li).appendChild(a).prepend(img);
  });

  app.appendChild(fragment);
});
