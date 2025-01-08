AOS.init();

window.addEventListener('scroll', reveal);

function reveal(){
 var reveals = document.querySelectorAll('.reveal');

 for(var i = 0; i < reveals.length; i++){

   var windowheight = window.innerHeight;
   var revealtop = reveals[i].getBoundingClientRect().top;
   var revealpoint = 150;

   if(revealtop < windowheight - revealpoint){
     reveals[i].classList.add('active');
   }
   // else{
   //   reveals[i].classList.remove('active');
   // }
 }
}



const line = document.querySelector(".timeline-innerline");

let i = 0;
let i2 = 1;
let target1 = document.querySelector(".timeline ul");
let target2 = document.querySelectorAll(".timeline ul li");

const timeline_events = document.querySelectorAll(".timeline ul li");

function showTime(e) {
e.setAttribute("done", "true");
e.querySelector(".timeline-point").style.background = "#111";
e.querySelector(".date").style.opacity = "100%";
e.querySelector("p").style.opacity = "100%";
e.querySelector("p").style.transform = "translateY(0px)";
// e.querySelector(".leg").style.height = "140px";
}

function hideTime(e) {
e.removeAttribute("done");
e.querySelector(".timeline-point").style.background = "rgb(228, 228, 228)";
e.querySelector(".date").style.opacity = "0%";
e.querySelector("p").style.opacity = "0%";
e.querySelector("p").style.transform = "translateY(-10px)";
}

function slowLoop() {
setTimeout(function () {
showTime(timeline_events[i]);
timelineProgress(i + 1);
i++;
if (i < timeline_events.length) {
slowLoop();
}
}, 300);
}


function timelineProgress(value) {
let progress = `${(value / timeline_events.length) * 100}%`;
if (window.matchMedia("(min-width: 728px)").matches) {
line.style.width = progress;
line.style.height = "4px";
} else {
line.style.height = progress;
line.style.width = "4px";
}
}

let observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.intersectionRatio > 0.9) {
 if (window.matchMedia("(min-width: 728px)").matches) {
   slowLoop();
 } else {
   showTime(entry.target);
   timelineProgress(i2);
   i2++;
 }
 observer.unobserve(entry.target);
}
});
},
{ threshold: 1, rootMargin: "0px 0px -50px 0px" }
);

if (window.matchMedia("(min-width: 728px)").matches) {
observer.observe(target1);
} else {
target2.forEach((t) => {
observer.observe(t);
});
}


timeline_events.forEach((li, index) => {
li.addEventListener("click", () => {
if (li.getAttribute("done")) {
timelineProgress(index);

// hide all timeline events from last upto the point clicked
timeline_events.forEach((ev, idx) => {
 if (idx >= index) {
   hideTime(ev);
 }
});
} else {
timelineProgress(index + 1);
// show all timeline events from first upto the point clicked
timeline_events.forEach((ev, idx) => {
 if (idx <= index) {
   showTime(ev);
 }
});
}
});
});

var doit;
window.addEventListener("resize", () => {
clearTimeout(doit);
doit = setTimeout(resizeEnd, 1200);
});

function resizeEnd() {
i = 0;
slowLoop();
}


const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
for (var j=1; j<400; j++){
banner.innerHTML += "<div class='blocks reveal2'></div>";
const duration = Math.random() * 0.5;
blocks[j].style.animationDuration = 2+duration+'s';
blocks[j].style.animationDelay = duration+'s';
}


window.addEventListener('scroll', reveal2);

function reveal2(){
 var reveals2 = document.querySelectorAll('.reveal2');

 for(var i = 0; i < reveals2.length; i++){

   var windowheight2 = window.innerHeight;
   var revealtop2 = reveals2[i].getBoundingClientRect().top;
   var revealpoint2 = 50;

   if(revealtop2 < windowheight2 - revealpoint2){
     reveals2[i].classList.add('active');
   }
 }
}







VANTA.BIRDS({
el: "#bird-background",
mouseControls: true,
touchControls: true,
gyroControls: false,
minHeight: 200.00,
minWidth: 200.00,
scale: 1.00,
scaleMobile: 1.00,
backgroundColor: '#ffffff',
color1: '#111111',
color2: '#999999',
// backgroundColor: 0x#ffffff,
// color1: 0x#111111,
// color2: 0x#999999,
colorMode: "lerpGradient",
birdSize: 1.40,
wingSpan: 24.00,
speedLimit: 6.00,
separation: 48.00,
alignment: 46.00,
cohesion: 46.00,
quantity: 2.00,
backgroundAlpha: 0.18
})

// navar scroll control
window.addEventListener("scroll", function(){
var header = document.querySelector("header");
header.classList.toggle("sticker", window.scrollY > 0);
if(window.scrollY > 0){
document.getElementById("navlogo").innerHTML='<img src="images/A-7logo.png" class="navbarlogo" alt="Image Not Found">'
}else{
document.getElementById("navlogo").innerHTML='<img src="images/A-7logo2.png" class="navbarlogo" alt="Image Not Found">'
}
})





const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
const scrollY = window.pageYOffset;
sectionAll.forEach((current) => {
const sectionHeight = current.offsetHeight;
const sectionTop = current.offsetTop - 100;
const sectionId = current.getAttribute('id');
console.log(sectionId);
if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
document
.querySelector('li a[href*="' + sectionId + '"]')
.classList.add('active');
} else {
document
.querySelector('li a[href*="' + sectionId + '"]')
.classList.remove('active');
}
});
});







var TxtType = function(el, toRotate, period) {
 this.toRotate = toRotate;
 this.el = el;
 this.loopNum = 0;
 this.period = parseInt(period, 10) || 2000;
 this.txt = '';
 this.tick();
 this.isDeleting = false;
};

TxtType.prototype.tick = function() {
 var i = this.loopNum % this.toRotate.length;
 var fullTxt = this.toRotate[i];

 if (this.isDeleting) {
 this.txt = fullTxt.substring(0, this.txt.length - 1);
 } else {
 this.txt = fullTxt.substring(0, this.txt.length + 1);
 }

 this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

 var that = this;
 var delta = 200 - Math.random() * 100;

 if (this.isDeleting) { delta /= 2; }

 if (!this.isDeleting && this.txt === fullTxt) {
 delta = this.period;
 this.isDeleting = true;
 } else if (this.isDeleting && this.txt === '') {
 this.isDeleting = false;
 this.loopNum++;
 delta = 500;
 }

 setTimeout(function() {
 that.tick();
 }, delta);
};

window.onload = function() {
 var elements = document.getElementsByClassName('typewrite');
 for (var i=0; i<elements.length; i++) {
     var toRotate = elements[i].getAttribute('data-type');
     var period = elements[i].getAttribute('data-period');
     if (toRotate) {
       new TxtType(elements[i], JSON.parse(toRotate), period);
     }
 }
 // INJECT CSS
 var css = document.createElement("style");
 css.type = "text/css";
 css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #999}";
 document.body.appendChild(css);
};



function myFunction(x) {
x.classList.toggle("change");
}

$(function() {
     $('.counter').counterUp({
         delay: 10,
         time: 700
     });
 });


 let innerCursor = document.querySelector('.inner-cursor');
 let outerCursor = document.querySelector('.outer-cursor');

 document.addEventListener('mousemove', moveCursor);

 function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
 }

 let links = Array.from(document.querySelectorAll("a"));

 links.forEach(link =>{
  link.addEventListener("mouseover", ()=>{
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", ()=>{
    innerCursor.classList.remove("grow");
  });
 });


