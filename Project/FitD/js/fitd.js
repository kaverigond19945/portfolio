$('#caro1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
})
$('#caro2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
})
$('#caro3').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
})
$('#caro4').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
})
$('#caro5').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
})
$('#caro6').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
    },
    1000:{
        items:2
    }
}
})
$(function() {
$('.counter1').counterUp({
    delay: 100,
    time: 3000
});
});

function bmicalculate(){
var height = parseInt(document.getElementById("validationCustom01").value);
var weight = parseInt(document.getElementById("validationCustom02").value);
bmi = ((weight/(height*height))*10000);

document.getElementById("bmiresult").innerHTML = "Your BMI is: " + bmi;

if ($("#validationCustom01").val() == "") {
$("#error1").html("Enter valid height");
return false;
} else if ($("#validationCustom02").val() == "") {
$("#error2").html("Enter valid weight");
return false;
} else {
return true;
}
}

$("a.themedit").click(function() {
    $("div.themenu").slideToggle('fast');
});





function bluecol(){
document.documentElement.style.setProperty('--bs-col1', "#1E90FF");
document.documentElement.style.setProperty('--bs-col2', "rgba(30, 144, 255, 0.5)");
$('body').find('.navlogo').html('<img src="images/dodgerblue-logo.png" alt="Image Not Found">');
}
function chocolatecol(){
document.documentElement.style.setProperty('--bs-col1', "#D2691E");
document.documentElement.style.setProperty('--bs-col2', "rgba(210, 105, 30, 0.5)");
$('body').find('.navlogo').html('<img src="images/chocolate-logo.png" alt="Image Not Found">');
}
function violetcol(){
document.documentElement.style.setProperty('--bs-col1', "#9400D3");
document.documentElement.style.setProperty('--bs-col2', "rgba(148, 0, 211, 0.5)");
$('body').find('.navlogo').html('<img src="images/darkviolet-logo.png" alt="Image Not Found">');
}
function orangecol(){
document.documentElement.style.setProperty('--bs-col1', "#FFA500");
document.documentElement.style.setProperty('--bs-col2', "rgba(255, 165, 0, 0.5)");
$('body').find('.navlogo').html('<img src="images/orange-logo.png" alt="Image Not Found">');
}
function greencol(){
document.documentElement.style.setProperty('--bs-col1', "#32CD32");
document.documentElement.style.setProperty('--bs-col2', "rgba(50, 205, 50, 0.5)");
$('body').find('.navlogo').html('<img src="images/limegreen-logo.png" alt="Image Not Found">');
}
function orangeredcol(){
document.documentElement.style.setProperty('--bs-col1', "#FF4500");
document.documentElement.style.setProperty('--bs-col2', "rgba(255, 69, 0, 0.5)");
$('body').find('.navlogo').html('<img src="images/orangered-logo.png" alt="Image Not Found">');
}

AOS.init();
