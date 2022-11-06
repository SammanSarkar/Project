// This prevents the page from scrolling down to where it was previously.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

var boxes = document.querySelectorAll(".box");
var algo =  0 ;

update(0) ; 
function checkBoxes(){
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
var p1 = [
  'Arranging students of as class in order of their height',
  'Students roll numbers assigned based on the alphabetical order of names',
  'During election poll counting, we are interested to know the order of the parties',
  'In any ecommerce website we tend to sort items by price from lowest to highest',

];
var p2 = [
 'In video games, the computer must direct simulated opponents around the map',
 'Finding way through a maze',
 'Finding shortest distance between two locations',
 'Searching the web'
];
var phrases = p1;

const el = document.querySelector(".text");
const fx = new TextScramble(el);  

let counter = 0;
function next(){
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 3200);
  });
  counter = (counter + 1) % phrases.length;
};

next();

//update function 
function algo_change(algo){
  if(algo == 0){
    document.getElementById("1").style.color = '#a646c6';
    document.getElementById("2").style.color = '#680780';
    document.getElementById("choose").innerHTML = "Choose A Sorting Algorithm: " ; 
    phrases = p1 ; 
    document.getElementById("head").innerHTML = "Sorting" ; 
    document.getElementById("head2").innerHTML = "Sorting" ; 
    document.getElementById("info").innerHTML ="A sorting algorithm is a method for reorganizing a large number of" 
    +" items into a specific<br>order, such as alphabetical, highest-to-lowest" 
    +"value or shortest-to-longest distance.<br><br>Real Life Examples: "; 
    
   document.getElementById("select_algo").innerHTML = "<div class=\"box\"><a href=\"sorting/bubblesort.html\" ><h2>Bubble Sort </h2></a></div><div class=\"box\"><a href=\"sorting/insertionsort.html\"  ><h2>Insertion Sort</h2></a></div><div class=\"box\"><a href=\"sorting/selectionsort.html\" ><h2>Selection sort</h2></a></div><div class=\"box\"><a href=\"sorting/mergesort.html\" ><h2>Merge Sort</h2></a></div><div class=\"box\"><a href=\"sorting/quicksort.html\" ><h2>Quick Sort</h2></a></div><div class=\"box\"><a href=\"sorting/heapsort.html\"  ><h2>Heap Sort</h2></a></div>";
   boxes = document.querySelectorAll(".box");
   checkBoxes() ; 
  }else{
    document.getElementById("2").style.color = '#a646c6';
    document.getElementById("1").style.color = '#680780'; 
    document.getElementById("choose").innerHTML = "Choose A Pathfinding Algorithm: " ; 
    phrases = p2 ; 
    document.getElementById("head").innerHTML = "Pathfinding" ; 
    document.getElementById("head2").innerHTML = "Pathfinding" ; 
    document.getElementById("info").innerHTML = "Pathfinding algorithms are used to identify optimal routes through a graph for <br> uses such as logistics planning,"
    +" least cost call or IP routing, and gaming simulation. <br><br>Real Life Examples: "; 

   document.getElementById("select_algo").innerHTML = "<div class=\"box\"><a href=\"path/dijkstra.html\" ><h2>Dijkstra </h2></a></div><div class=\"box\"><a href=\"path/bfs.html.html\" ><h2>BFS</h2></a></div><div class=\"box\"><a href=\"path/dfs.html\" ><h2>DFS</h2></a></div>";
   boxes = document.querySelectorAll(".box");
   checkBoxes() ; 
  }
}

function update(new_algo){
  algo = new_algo ; 
  algo_change(algo) ;     
}
