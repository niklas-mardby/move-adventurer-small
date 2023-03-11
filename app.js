"use strict";

const mainElement = document.querySelector("main");
const buttonUp = document.querySelector(".up");
const buttonDown = document.querySelector(".down");
const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");

const World = {
  width: 6,
  height: 6,
};

const Hero = {
  x: 2,
  y: 2,
  img: "&#x1F920;",
  moveUp: function () {
    this.y--;
  },
  moveDown: function () {
    this.y++;
  },
  moveLeft: function () {
    this.x--;
  },
  moveRight: function () {
    this.x++;
  },
};

const renderMain = () => {
  mainElement.innerHTML = "";

  for (let i = 0; i < World.height; i++) {
    let r = document.createElement("div");
    r.className = "row";
    for (let j = 0; j < World.width; j++) {
      let c = document.createElement("div");
      c.className = "cell";
      r.append(c);

      if (i === Hero.y && j === Hero.x) {
        c.innerHTML = Hero.img;
      }
    }
    mainElement.append(r);
  }
};

buttonUp.addEventListener("click", () => {
  Hero.moveUp();
  renderMain();
});
buttonDown.addEventListener("click", () => {
  Hero.moveDown();
  renderMain();
});
buttonLeft.addEventListener("click", () => {
  Hero.moveLeft();
  renderMain();
});
buttonRight.addEventListener("click", () => {
  Hero.moveRight();
  renderMain();
});

renderMain();
