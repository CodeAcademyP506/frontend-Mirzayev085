var bitin = document.getElementById('bitin');
var bitinimage = document.getElementById('bitinimage');

bitin.addEventListener('mouseover', function(){
    bitinimage.style.transform = 'translate(130px, 0px)';
    bitin.style.paddingRight = '30px'
    bitinimage.style.transition = '0.4s ease-in-out';
    bitin.style.background = '#0156c5';
})


bitin.addEventListener('mouseout', function(){
    bitinimage.style.transform = 'translate(180px, 0px)';
    bitin.style.paddingRight = '';
    bitinimage.style.transition = '0.4s ease-in-out';
    bitin.style.background = '#0066eb';
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



