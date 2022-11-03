const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes();

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = [
  'Arranging students of as class in order of their height',
  'Students roll numbers assigned based on the alphabetical order of names',
  'During election poll counting, we are interested to know the order of the parties',
  'In any ecommerce website we tend to sort items by price from lowest to highest',


];

const el = document.querySelector(".text");
const fx = new TextScramble(el);  

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 3200);
  });
  counter = (counter + 1) % phrases.length;
};

next();
const link0 = document.querySelector(".link0");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");
const link5 = document.querySelector(".link5");
const transition = document.querySelector(".transition");
link0.addEventListener("click", (e) => {
   document.getElementById("change").innerHTML = "Bubble Sort";
  e.preventDefault();
  transition.classList.add("slide");
  setTimeout(() => {
    window.location = link0.href;
  }, 1500);
});
link1.addEventListener("click", (e) => {
  document.getElementById("change").innerHTML = "Insertion Sort";
 e.preventDefault();
 transition.classList.add("slide");
 setTimeout(() => {
   window.location = link1.href;
 }, 1500);
});
link2.addEventListener("click", (e) => {
  document.getElementById("change").innerHTML = "Selection Sort";
 e.preventDefault();
 transition.classList.add("slide");
 setTimeout(() => {
   window.location = link2.href;
 }, 1500);
});
link3.addEventListener("click", (e) => {
  document.getElementById("change").innerHTML = "Merge Sort";
 e.preventDefault();
 transition.classList.add("slide");
 setTimeout(() => {
   window.location = link3.href;
 }, 1500);
});
link4.addEventListener("click", (e) => {
  document.getElementById("change").innerHTML = "Quick Sort";
 e.preventDefault();
 transition.classList.add("slide");
 setTimeout(() => {
   window.location = link4.href;
 }, 1500);
});
link5.addEventListener("click", (e) => {
  document.getElementById("change").innerHTML = "Heap Sort";
 e.preventDefault();
 transition.classList.add("slide");
 setTimeout(() => {
   window.location = link5.href;
 }, 1500);
});
