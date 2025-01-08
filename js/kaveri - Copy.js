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
banner.innerHTML += "<div class='blocks reveal'></div>";
const duration = Math.random() * 0.5;
blocks[j].style.animationDuration = 2+duration+'s';
blocks[j].style.animationDelay = duration+'s';
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






TweenMax.set('#circlePath', {
attr: {
r: document.querySelector('#mainCircle').getAttribute('r')
}
})
MorphSVGPlugin.convertToPath('#circlePath');

var xmlns = "http://www.w3.org/2000/svg",
xlinkns = "http://www.w3.org/1999/xlink",
select = function(s) {
return document.querySelector(s);
},
selectAll = function(s) {
return document.querySelectorAll(s);
},
mainCircle = select('#mainCircle'),
mainContainer = select('#mainContainer'),
car = select('#car'),
mainSVG = select('.mainSVG'),
mainCircleRadius = Number(mainCircle.getAttribute('r')),
//radius = mainCircleRadius,
numDots = mainCircleRadius / 2,
step = 360 / numDots,
dotMin = 0,
circlePath = select('#circlePath')

//
//mainSVG.appendChild(circlePath);
TweenMax.set('svg', {
visibility: 'visible'
})
TweenMax.set([car], {
transformOrigin: '50% 50%'
})
TweenMax.set('#carRot', {
transformOrigin: '0% 0%',
rotation:30
})

var circleBezier = MorphSVGPlugin.pathDataToBezier(circlePath.getAttribute('d'), {
offsetX: -20,
offsetY: -5
})



//console.log(circlePath)
var mainTl = new TimelineMax();

function makeDots() {
var d, angle, tl;
for (var i = 0; i < numDots; i++) {

d = select('#puff').cloneNode(true);
mainContainer.appendChild(d);
angle = step * i;
TweenMax.set(d, {
//attr: {
x: (Math.cos(angle * Math.PI / 180) * mainCircleRadius) + 400,
y: (Math.sin(angle * Math.PI / 180) * mainCircleRadius) + 300,
rotation: Math.random() * 360,
transformOrigin: '50% 50%'
 //}
})

tl = new TimelineMax({
repeat: -1
});
tl
.from(d, 0.2, {
 scale: 0,
 ease: Power4.easeIn
})
.to(d, 1.8, {
 scale: Math.random() + 2,
 alpha: 0,
 ease: Power4.easeOut
})

mainTl.add(tl, i / (numDots / tl.duration()))
}
var carTl = new TimelineMax({
repeat: -1
});
carTl.to(car, tl.duration(), {
bezier: {
type: "cubic",
values: circleBezier,
autoRotate: true
},
ease: Linear.easeNone
})
mainTl.add(carTl, 0.05)
}

makeDots();
mainTl.time(120);
TweenMax.to(mainContainer, 20, {
rotation: -360,
svgOrigin: '400 300',
repeat: -1,
ease: Linear.easeNone
});
mainTl.timeScale(1.1)



var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
loader.style.display = "none";
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


