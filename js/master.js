// menu
menu.onclick = function () {
  if (links.style.height == "0px") {
    links.style.height = "calc(100vh - 65px)";
  } else {
    links.style.height = "0px";
  }
};

// work
// https://muhammed-abdelaleam.github.io/me/
fetch("./js/work.json")
  .then((data) => data.json())
  .then((data) => {
    for (const key in data) {
      let pro = data[key];
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
          <div class="photo">
            <img
              src="${pro.photo}"
              alt="work image"
            />
          </div>
          <div class="label" data-level="${pro.level}">${pro.level}</div>
          <div class="title">${pro.name}</div>
          <div class="des">${pro.des}</div>
      `;
      div.onclick = function () {
        location.href = pro.link;
      };
      workE.appendChild(div);
    }
  });
