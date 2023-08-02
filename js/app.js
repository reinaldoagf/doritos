function initGifs() {
    const gifContainers = document.querySelectorAll('a[data-gif-container]');
    gifContainers.forEach((container) => {
      container.addEventListener('mouseenter', function () {
        const imageGif = this.querySelector('img[data-gif]');
        imageGif.src = imageGif.getAttribute('data-gif');
      });
  
      container.addEventListener('focusin', function () {
        const imageGif = this.querySelector('img[data-gif]');
        imageGif.src = imageGif.getAttribute('data-gif');
      });
    });
}
function initSliders() {    
  $('#slider-for').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,
    asNavFor: '.slider'
  });
  $('#slider-info').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    focusOnSelect: true,
    arrows: false,
    asNavFor: '.slider'
  });
  $('#slider-nav').slick({
    slidesToScroll: 1,
    dots: false,
    slidesToShow: 6,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,
    asNavFor: '.slider',
  });
}
$(document).ready(function() {
  initGifs();
  initSliders();
});
