// @ts-nocheck
"use strict";

/* =========================================
   EK BAAT DIL SE
   INTERACTIONS + ANIMATIONS
========================================= */

const scenes = document.querySelectorAll(".scene");

let currentScene = 1;


/* =========================================
   SCENE CONTROL
========================================= */

function showScene(sceneNumber) {
  scenes.forEach((scene) => {
    scene.classList.remove("active");
  });

  const target = document.getElementById(`scene${sceneNumber}`);

  if (!target) return;

  target.classList.add("active");
  currentScene = sceneNumber;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  createSmallSparkleBurst();
}


/* =========================================
   BACKGROUND DECOR
========================================= */

const backgroundDecor =
  document.getElementById("backgroundDecor");

const floatingHearts =
  document.getElementById("floatingHearts");


function createBackgroundDecor() {

  if (!backgroundDecor) return;

  const items = [
    "♡",
    "✦",
    "♡",
    "✧",
    "•",
    "♡",
    "🌸",
    "✦",
    "♡",
    "✧",
    "•",
    "♡"
  ];

  items.forEach((item, index) => {

    const element = document.createElement("span");

    element.className = "decor-item";
    element.textContent = item;

    element.style.left =
      `${Math.random() * 100}%`;

    element.style.top =
      `${Math.random() * 100}%`;

    element.style.animationDelay =
      `${index * 0.35}s`;

    element.style.fontSize =
      `${14 + Math.random() * 14}px`;

    backgroundDecor.appendChild(element);
  });
}


function createFloatingHeart() {

  if (!floatingHearts) return;

  const heart = document.createElement("span");

  heart.className = "floating-heart";

  heart.textContent =
    Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left =
    `${Math.random() * 100}%`;

  heart.style.fontSize =
    `${12 + Math.random() * 14}px`;

  heart.style.animationDuration =
    `${7 + Math.random() * 5}s`;

  floatingHearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}


createBackgroundDecor();

setInterval(createFloatingHeart, 900);


/* =========================================
   SPARKLE EFFECT
========================================= */

const sparkleContainer =
  document.getElementById("sparkleContainer");


function createSparkle(x, y) {

  if (!sparkleContainer) return;

  const sparkle = document.createElement("span");

  sparkle.className = "sparkle";

  const symbols = [
    "✨",
    "♡",
    "✦",
    "🌸",
    "💗"
  ];

  sparkle.textContent =
    symbols[
      Math.floor(Math.random() * symbols.length)
    ];

  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  sparkleContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}


function createSmallSparkleBurst() {

  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;

  for (let i = 0; i < 8; i++) {

    setTimeout(() => {

      createSparkle(
        x + (Math.random() - 0.5) * 180,
        y + (Math.random() - 0.5) * 180
      );

    }, i * 60);
  }
}


/* =========================================
   BUTTON SPARKLES
========================================= */

function buttonSparkles(button) {

  if (!button) return;

  const rect =
    button.getBoundingClientRect();

  for (let i = 0; i < 10; i++) {

    createSparkle(
      rect.left +
      rect.width / 2 +
      (Math.random() - 0.5) * rect.width,

      rect.top +
      rect.height / 2 +
      (Math.random() - 0.5) * rect.height
    );
  }
}


/* =========================================
   SCENE 1
========================================= */

const startButton =
  document.getElementById("startButton");

if (startButton) {

  startButton.addEventListener("click", () => {

    buttonSparkles(startButton);

    setTimeout(() => {
      showScene(2);
    }, 450);

  });
}


/* =========================================
   SCENE 2
========================================= */

const scene2Next =
  document.getElementById("scene2Next");

if (scene2Next) {

  scene2Next.addEventListener("click", () => {

    buttonSparkles(scene2Next);

    setTimeout(() => {
      showScene(3);
    }, 350);

  });
}


/* =========================================
   SCENE 3
========================================= */

const scene3Next =
  document.getElementById("scene3Next");

if (scene3Next) {

  scene3Next.addEventListener("click", () => {

    buttonSparkles(scene3Next);

    setTimeout(() => {
      showScene(4);
    }, 350);

  });
}


/* =========================================
   SCENE 4
========================================= */

const scene4Next =
  document.getElementById("scene4Next");

if (scene4Next) {

  scene4Next.addEventListener("click", () => {

    buttonSparkles(scene4Next);

    setTimeout(() => {
      showScene(5);
    }, 350);

  });
}


/* =========================================
   SCENE 5 — I LOVE YOU
========================================= */

const scene5Next =
  document.getElementById("scene5Next");

if (scene5Next) {

  scene5Next.addEventListener("click", () => {

    buttonSparkles(scene5Next);

    setTimeout(() => {
      showScene(6);
    }, 400);

  });
}


/* =========================================
   SCENE 6
========================================= */

const scene6Next =
  document.getElementById("scene6Next");

if (scene6Next) {

  scene6Next.addEventListener("click", () => {

    buttonSparkles(scene6Next);

    setTimeout(() => {
      showScene(7);
    }, 400);

  });
}


/* =========================================
   SCENE 7
========================================= */

const scene7Next =
  document.getElementById("scene7Next");

if (scene7Next) {

  scene7Next.addEventListener("click", () => {

    buttonSparkles(scene7Next);

    setTimeout(() => {
      showScene(8);
    }, 400);

  });
}


/* =========================================
   YES / NO
========================================= */

const yesButton =
  document.getElementById("yesButton");

const noButton =
  document.getElementById("noButton");


/* =========================================
   YES
========================================= */

if (yesButton) {

  yesButton.addEventListener("click", () => {

    buttonSparkles(yesButton);

    createBigHeartBurst();

    setTimeout(() => {
      showScene(9);
    }, 650);

  });
}


/* =========================================
   NO
========================================= */

if (noButton) {

  noButton.addEventListener("click", () => {

    buttonSparkles(noButton);

    setTimeout(() => {
      showScene(10);
    }, 500);

  });
}


/* =========================================
   BIG HEART BURST
========================================= */

function createBigHeartBurst() {

  const symbols = [
    "💗",
    "♡",
    "♥",
    "🌸",
    "✨"
  ];

  for (let i = 0; i < 28; i++) {

    const heart =
      document.createElement("span");

    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.zIndex = "100";
    heart.style.pointerEvents = "none";

    heart.textContent =
      symbols[
        Math.floor(Math.random() * symbols.length)
      ];

    heart.style.fontSize =
      `${12 + Math.random() * 20}px`;

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      100 + Math.random() * 260;

    const x =
      Math.cos(angle) * distance;

    const y =
      Math.sin(angle) * distance;

    heart.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(0.3)",
          opacity: 0
        },
        {
          transform:
            "translate(-50%, -50%) scale(1)",
          opacity: 1,
          offset: 0.2
        },
        {
          transform:
            `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.1)`,
          opacity: 0
        }
      ],
      {
        duration: 1800 + Math.random() * 900,
        easing: "cubic-bezier(.2,.8,.2,1)"
      }
    );

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}


/* =========================================
   CLICK SPARKLES
========================================= */

document.addEventListener("click", (event) => {

  const target = event.target;

  if (
    target.closest("button")
  ) {
    return;
  }

  createSparkle(
    event.clientX,
    event.clientY
  );
});


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    const activeScene =
      document.querySelector(".scene.active");

    if (!activeScene) return;

    const button =
      activeScene.querySelector("button");

    if (button) {
      button.click();
    }
  }

});


/* =========================================
   TOUCH FEEDBACK
========================================= */

document.addEventListener(
  "touchstart",
  (event) => {

    const touch =
      event.touches[0];

    if (!touch) return;

    createSparkle(
      touch.clientX,
      touch.clientY
    );

  },
  {
    passive: true
  }
);


/* =========================================
   INITIAL STATE
========================================= */

showScene(1);

console.log(
  "Ek Baat Dil Se — website loaded ❤️"
);