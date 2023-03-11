"use strict";

const World = {
  width: 6,
  height: 6,
};

const Hero = {
  x: 2,
  y: 2,
};

const mainElement = document.querySelector("main");

for (let i = 0; i < World.height; i++) {
  let r = document.createElement("div");
  r.className = "row";
  for (let j = 0; j < World.width; j++) {
    let c = document.createElement("div");
    c.className = "cell";
    r.append(c);

    if (i === Hero.y && j === Hero.x) {
      c.innerHTML = "&#x1F920;";
    }
  }
  mainElement.append(r);
}
