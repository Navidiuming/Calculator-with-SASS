const btn_themeChanger = document.getElementById("btn_themeChanger");
const div_mainContainer = document.querySelector(".mainContiner");
const body = document.querySelector("body");

function hi() {
  console.log(div_mainContainer);
}

let themes = ["blueTheme", "greenTheme", "myTheme", "defultTheme"];
let themeCounter = 0;

function changeTheme() {
  for (let i = 0; i <= 3; i++) {
    body.classList.remove(themes[i]);
  }

  if(themeCounter>=3){
    themeCounter=0;
  }else{
    themeCounter++;
  }
  body.classList.add(themes[themeCounter]);
}
btn_themeChanger.addEventListener("click", changeTheme);
