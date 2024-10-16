const btn_themeChanger = document.getElementById("btn_themeChanger");
const div_mainContainer = document.querySelector(".mainContiner");
const body = document.querySelector("body");

function hi() {
  console.log(div_mainContainer);
}

const themes = {
  1: "blueTheme",
  2: "greenTheme",
  3: "myTheme",
  4: "defultTheme"
};

let themeCounter = 1;
function changeTheme() {
  themeCounter++;

  if (themeCounter > 4) {
    themeCounter = 1;
  }

  switch (themeCounter) {
    case 1:
      body.classList.add(themes[1]);
      body.classList.remove(themes[2]);
      body.classList.remove(themes[3]);
      body.classList.remove(themes[4]);
      break;
    case 2:
      body.classList.add(themes[2]);
      body.classList.remove(themes[1]);
      body.classList.remove(themes[3]);
      body.classList.remove(themes[4]);
      break;
    case 3:
      body.classList.add(themes[3]);
      body.classList.remove(themes[2]);
      body.classList.remove(themes[1]);
      body.classList.remove(themes[4]);
      break;
    case 4:
      body.classList.remove(themes[2]);
      body.classList.remove(themes[3]);
      body.classList.remove(themes[1]);
      body.classList.add(themes[4]);
      break;
  }
  console.log(body.classList);
}
btn_themeChanger.addEventListener("click", changeTheme);
