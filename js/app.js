const products = [{
      src: "./img/d1.png",
      alt: "product1",
      title: "DORITOS®️ Nacho Cheese Flavored",
      link: "#"
   },
   {
      src: "./img/d2.png",
      alt: "product2",
      title: "DORITOS®️ SWEET & TANGY BBQ",
      link: "#"
   },
   {
      src: "./img/d3.png",
      alt: "product3",
      title: "DORITOS®️ COOL RANCH",
      link: "#"
   },
   {
      src: "./img/d4.png",
      alt: "product4",
      title: "DORITOS®️ FLAMIN' HOT®️ NACHO",
      link: "#"
   },
   {
      src: "./img/d5.png",
      alt: "product5",
      title: "DORITOS®️ FLAMIN' HOT®️ LIMÓN",
      link: "#"
   },
   {
      src: "./img/d6.png",
      alt: "product6",
      title: "DORITOS®️ FLAMIN' HOT®️ COOL RANCH",
      link: "#"
   },
   {
      src: "./img/d7.png",
      alt: "product7",
      title: "DORITOS®️ ULTIMATE CHEDDAR",
      link: "#"
   },
   {
      src: "./img/d8.png",
      alt: "product8",
      title: "DORITOS®️ SPICY SWEET CHILI",
      link: "#"
   },
   {
      src: "./img/d9.png",
      alt: "product9",
      title: "DORITOS®️ SALSA VERDE",
      link: "#"
   }
];

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

function populateForItems() {
   // Array containing image URLs and alt text
   const slider = $("#slider-for");

   products.forEach(function (item) {
      const itemHTML = `
         <div class="item">
            <div class="item__image">
                  <img src="${item.src}" alt="${item.alt}" />
            </div>
         </div>
      `;

      slider.append(itemHTML);
   });
}

function populateInfoItems() {
   const slider = $("#slider-info");

   products.forEach(function (item) {
      var itemHTML = `
            <div class="item">
                  <h1 class="hide-mobile">${item.title}</h1>
                  <a role="button" href="${item.link}" class="hide-mobile btn btn-main to-buy-now">
                     Buy Now
                  </a>
            </div>
         `;

      slider.append(itemHTML);
   });
}

function populateNavItems() {
   const slider = $("#slider-nav");

   products.forEach(function (item) {
      var itemHTML = `
               <div class="small-item">
                  <img src="${item.src}" alt="${item.alt}" />
               </div>
         `;

      slider.append(itemHTML);
   });
}

function initSliders() {
   populateForItems();
   populateInfoItems();
   populateNavItems();

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
$(document).ready(function () {
   initGifs();
   initSliders();
});