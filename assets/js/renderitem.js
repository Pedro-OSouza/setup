import listItems from "./createItem.js";
const ul = document.querySelector("#ul");

for (let item of listItems) {
    const li = document.createElement("li");
    li.innerHTML = createItem(item.link, item.img, item.title, item.tag);
    ul.appendChild(li);
  }
  
  function createItem(link, img, title, tag) {
    const item = `<a href="${link}" title="${title}" target="_blank" class="card">
        <div><img src="assets/img/${img}.png" alt="${title}"></div>
        <div><h2 class="title">${title}</h2></div>
        <div><span class="tag">${tag}</span></div>
      </a>`;
  
    return item;
  } 