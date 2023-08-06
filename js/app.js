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
  const items = [{
        src: "./img/d1.png",
        alt: "product1"
     },
     {
        src: "./img/d2.png",
        alt: "product2"
     },
     {
        src: "./img/d3.png",
        alt: "product3"
     },
     {
        src: "./img/d4.png",
        alt: "product4"
     },
     {
        src: "./img/d5.png",
        alt: "product5"
     },
     {
        src: "./img/d6.png",
        alt: "product6"
     },
     {
        src: "./img/d7.png",
        alt: "product7"
     },
     {
        src: "./img/d8.png",
        alt: "product8"
     },
     {
        src: "./img/d9.png",
        alt: "product9"
     }
  ];

  const slider = $("#slider-for");

  items.forEach(function (item) {
     var itemHTML = `
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
  // Array containing item details
  const items = [{
        title: "DORITOS®️ Nacho Cheese Flavored",
        link: "#"
     },
     {
        title: "DORITOS®️ SWEET & TANGY BBQ",
        link: "#"
     },
     {
        title: "DORITOS®️ COOL RANCH",
        link: "#"
     },
     {
        title: "DORITOS®️ FLAMIN' HOT®️ NACHO",
        link: "#"
     },
     {
        title: "DORITOS®️ FLAMIN' HOT®️ LIMÓN",
        link: "#"
     },
     {
        title: "DORITOS®️ FLAMIN' HOT®️ COOL RANCH",
        link: "#"
     },
     {
        title: "DORITOS®️ ULTIMATE CHEDDAR",
        link: "#"
     },
     {
        title: "DORITOS®️ SPICY SWEET CHILI",
        link: "#"
     },
     {
        title: "DORITOS®️ SALSA VERDE",
        link: "#"
     }
  ];
  const slider = $("#slider-info");

  items.forEach(function (item) {
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
  // Array containing item details
  // Array containing image URLs
  const imageUrls = [
     "./img/d1.png",
     "./img/d2.png",
     "./img/d3.png",
     "./img/d4.png",
     "./img/d5.png",
     "./img/d6.png",
     "./img/d7.png",
     "./img/d8.png",
     "./img/d9.png"
  ];

  const slider = $("#slider-nav");

  imageUrls.forEach(function (url) {
     var itemHTML = `
               <div class="small-item">
                   <img src="${url}" alt="product" />
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