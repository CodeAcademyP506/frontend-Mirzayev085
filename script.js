$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });





$(function () {
    $('.cardd').hover(function () {
        $('.card-title1').css('color', 'orangered');
        document.querySelector(".mysize").style.transform = "translate(0,-20px)";
        document.querySelector(".mysize").style.transition = "0.5s";
    }, function () {
        // on mouseout, reset the background colour
        $('.card-title1').css('color', '');
        document.querySelector(".mysize").style.transform = "translate(0,0px)";
        document.querySelector(".mysize").style.transition = "0.5s";
    });
});

$(function () {
    $('.card2').hover(function () {
        $('.card-title2').css('color', 'blue');
        document.querySelector(".mysize1").style.transform = "translate(0,-20px)";
        document.querySelector(".mysize1").style.transition = "0.5s";
    }, function () {
        // on mouseout, reset the background colour
        $('.card-title2').css('color', '');
        document.querySelector(".mysize1").style.transform = "translate(0,0px)";
        document.querySelector(".mysize1").style.transition = "0.5s";
    });
});


$(function () {
    $('.card3').hover(function () {
        $('.card-title3').css('color', '#51CAE3');
        document.querySelector(".mysize2").style.transform = "translate(0,-20px)";
        document.querySelector(".mysize2").style.transition = "0.5s";
    }, function () {
        // on mouseout, reset the background colour
        $('.card-title3').css('color', '');
        document.querySelector(".mysize2").style.transform = "translate(0,0px)";
        document.querySelector(".mysize2").style.transition = "0.5s";
    });
});




$(function () {
    $('.bir').hover(function () {
        
        document.querySelector(".bir").style.transform = "translate(10px,0)";
        document.querySelector(".bir").style.transition = "0.5s";
    }, function () {
        // on mouseout, reset the background colour
        
        document.querySelector(".bir").style.transform = "translate(0,0px)";
        document.querySelector(".bir").style.transition = "0.5s";
    });
});


$(function () {
    $('.iki').hover(function () {
        
        document.querySelector(".iki").style.transform = "translate(10px,0)";
        document.querySelector(".iki").style.transition = "0.5s";
    }, function () {
        // on mouseout, reset the background colour
        
        document.querySelector(".iki").style.transform = "translate(0,0px)";
        document.querySelector(".iki").style.transition = "0.5s";
    });
});

$(function () {
    $('.uc').hover(function () {
        
        document.querySelector(".uc").style.transform = "translate(10px,0)";
        document.querySelector(".uc").style.transition = "0.5s";
    }, function () {
        // on mouseout, reset the background colour
        
        document.querySelector(".uc").style.transform = "translate(0,0px)";
        document.querySelector(".uc").style.transition = "0.5s";
    });
});

$(function () {
    $('.dord').hover(function () {
        
        document.querySelector(".dord").style.transform = "translate(10px,0)";
        document.querySelector(".dord").style.transition = "0.5s";
    }, function () {
        // on mouseout, reset the background colour
        
        document.querySelector(".dord").style.transform = "translate(0,0px)";
        document.querySelector(".dord").style.transition = "0.5s";
    });
});




function MouseOver(elem) {
  elem.style.boxShadow = "inset 0 0 0 40px white";
  elem.style.transition = "0.5s";
  elem.style.color = "grey";
}

function MouseOut(elem) {
    elem.style.transition = "0.4s";
  elem.style.boxShadow = "";
  elem.style.color = "white";
}


var kart = document.querySelectorAll('.kart');
var daire = document.querySelectorAll('.daire');
var dairem = document.querySelectorAll('.dairem');
 



for(let i = 0; i<6; i++){
    kart[i].addEventListener('mouseover', function(){
        daire[i].style.transform = "translate(160px, 95px)"
        daire[i].style.opacity = "1"
        dairem[i].style.opacity = "0.6"
        daire[i].style.transition = "0.5s"
        dairem[i].style.transition = "0.5s"
    })
    
    kart[i].addEventListener('mouseout', function(){
        daire[i].style.transform = "translate(160px, 0px)"
        daire[i].style.opacity = "0"
        dairem[i].style.opacity = "0"
        daire[i].style.transition = "0.5s"
        dairem[i].style.transition = "0.5s"
    })

}

for(let i = 0; i<daire.length; i++){
    kart[i].addEventListener('mouseover', function(){
        daire[i].style.transform = "translate(160px, 95px)"
        daire[i].style.opacity = "1"
        dairem[i].style.opacity = "0.6"
        daire[i].style.transition = "0.5s"
        dairem[i].style.transition = "0.5s"
    })
    
    kart[i].addEventListener('mouseout', function(){
        daire[i].style.transform = "translate(160px, 0px)"
        daire[i].style.opacity = "0"
        dairem[i].style.opacity = "0"
        daire[i].style.transition = "0.5s"
        dairem[i].style.transition = "0.5s"
    })
}


for(let i = 0; i<dairem.length; i++){
    kart[i].addEventListener('mouseover', function(){
        daire[i].style.transform = "translate(160px, 95px)"
        daire[i].style.opacity = "1"
        dairem[i].style.opacity = "0.6"
        daire[i].style.transition = "0.5s"
        dairem[i].style.transition = "0.5s"
    })
    
    kart[i].addEventListener('mouseout', function(){
        daire[i].style.transform = "translate(160px, 0px)"
        daire[i].style.opacity = "0"
        dairem[i].style.opacity = "0"
        daire[i].style.transition = "0.5s"
        dairem[i].style.transition = "0.5s"
    })
}


var buton = document.querySelectorAll('.batn');
var point = document.querySelectorAll('.point')


for(let i = 0; i<buton.length; i++){



buton[i].addEventListener('mouseover', function(){
    
    point[i].style.transition = "0.3s ease-in-out"
    point[i].style.marginRight = "40px"
})

buton[i].addEventListener('mouseout', function(){
   
    point[i].style.transition = "0.3s ease-in-out"
    point[i].style.marginRight = ""
    
})}


var butonu = document.querySelector('.yenibut');
var pointi = document.querySelector('.pointi')




butonu.addEventListener('mouseover', function(){
    
    pointi.style.transition = "0.3s ease-in-out"
    pointi.style.marginRight = "49px"
})

butonu.addEventListener('mouseout', function(){
   
    pointi.style.transition = "0.3s ease-in-out"
    pointi.style.marginRight = ""
    
})

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


var piley = document.querySelector('.piley');
var pilaytext = document.querySelector('.pilaytext');
var pilay = document.querySelector('.pilay')

pilay.addEventListener('mouseover', function(){
    pilaytext.style.display = 'block';
    piley.style.display = 'none';
    pilay.style.cursor = 'pointer';
    // pilaytext.className += 'slideInUp animated'
})

pilay.addEventListener('mouseout', function(){
    pilaytext.style.display = 'none';
    piley.style.display = 'block';
    
})

