const data = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" }
];

const fetchData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 3000);
});

const app = document.getElementById("js-app");
const fragment = document.createDocumentFragment();

fetchData.then((values) => {
  values.forEach((value) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.href = `/${value.to}`;
    a.textContent = value.text;
    img.src = value.img;
    img.alt = value.alt;

    fragment
      .appendChild(li)
      .appendChild(a)
      .insertAdjacentElement("afterbegin", img);
  });

  app.appendChild(fragment);
});
