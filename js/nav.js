//Topnav change//
const navigation = document.getElementById("navigation");
let lastScrollTop = 0;

window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navigation.classList.add('topnavChange');
    } else {
        navigation.classList.remove('topnavChange');
    }
    lastScrollTop = scrollTop;
});

// Topnav responsive//
function myNav() {
    var x = document.getElementById("navigation");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
