





var box = document.getElementsByClassName('boxum');
var social = document.getElementsByClassName('social');


for(let i = 0; i<social.length; i++){
    

box[i].addEventListener('mouseover', function(){
    
    social[i].style.opacity = "1"
     social[i].style.transform = "translate(-45px, 0px)"; 
     social[i].style.transition = "0.7s ease-in-out"
     
     
});

box[i].addEventListener('mouseout', function(){
   
    social[i].style.transform = ""; 
    social[i].style.opacity = "0"
  
})

}


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










// var buton = document.getElementById('buton');
// var point = document.getElementById('point')


// buton.addEventListener('mouseover', function(){
//     // point.style.display = "inline-block"
//     point.style.transition = "1.2s ease"
//     point.style.transform = "translate(15px, 0px)"; 
// })

// buton.addEventListener('mouseout', function(){
//     point.style.display = "none"
//     point.style.transition = "1.2s"
// })


// var butonu = document.getElementById('buton');
// var pointi = document.getElementById('point')


// buton.addEventListener('mouseover', function(){
//     // point.style.display = "inline-block"
//     point.style.transition = "1.2s ease"
//     point.style.transform = "translate(15px, 0px)"; 
// })

// buton.addEventListener('mouseout', function(){
//     point.style.display = "none"
//     point.style.transition = "1.2s"
// })

// var piley = document.querySelector('.piley');
// var pilaytext = document.querySelector('pilaytext');

// piley.addEventListener('mouseover', function(){
//     pilaytext.style.display = "none";
//     piley.style.display = "block"
// })


