"use strict";

let card = document.getElementById("product");

//! ARRAY S OBJEKTY PRO JEDNOTLIVÉ HTML ELEMENTY !//
let cardData = [
  {
    id: 1,
    slide: 1,
    heading: "FEO produkt loremipsum",
    discount: "14%",
    deal: "1+2 zdarma",
    img: "/Vizuální_podklady/burger-and-soda.png",
    weight: "3ks",
    price: "1 349 Kč",
    previousPrice: "1 349 Kč",
    weightToPrice: "34,90 Kč/kg",
    inStock: "Skladem",
  },
  {
    id: 2,
    slide: 2,
    heading: "FEO produkt loremipsum",
    discount: "12%",
    deal: "1+2 zdarma",
    img: "/Vizuální_podklady/burger-and-soda.png",
    weight: "75 g",
    price: "1 349 Kč",
    previousPrice: "1 349 Kč",
    weightToPrice: "34,90 Kč/kg",
    inStock: "Skladem",
  },
  {
    id: 3,
    slide: 3,
    heading: "FEO produkt loremipsum",
    discount: "5%",
    deal: "2+2 zdarma",
    img: "/Vizuální_podklady/burger-and-soda.png",
    weight: "75 g",
    price: "1 349 Kč",
    previousPrice: "1 349 Kč",
    weightToPrice: "34,90 Kč/kg",
    inStock: "Skladem",
  },
  {
    id: 4,
    slide: 4,
    heading: "FEO produkt loremipsum",
    discount: "5%",
    deal: "2+1 zdarma",
    img: "/Vizuální_podklady/burger-and-soda.png",
    weight: "3ks",
    price: "1 349 Kč",
    previousPrice: "1 349 Kč",
    weightToPrice: "34,90 Kč/kg",
    inStock: "Skladem",
  },
  {
    id: 5,
    slide: 5,
    heading: "FEO produkt loremipsum",
    discount: "11%",
    deal: "1+1 zdarma",
    img: "/Vizuální_podklady/burger-and-soda.png",
    weight: "75 g",
    price: "1 349 Kč",
    previousPrice: "1 349 Kč",
    weightToPrice: "34,90 Kč/kg",
    inStock: "Skladem",
  },
  {
    id: 6,
    slide: 6,
    heading: "FEO produkt loremipsum",
    discount: "10%",
    deal: "3+3 zdarma",
    img: "/Vizuální_podklady/burger-and-soda.png",
    weight: "75 g",
    price: "1 349 Kč",
    previousPrice: "1 349 Kč",
    weightToPrice: "34,90 Kč/kg",
    inStock: "Skladem",
  },
];

//! FNCE PRO GENEROVÁNÍ KARTY PRODUKTU !//
//! K divu s classem "swiper-slide", je možné přidat ${slide} pro zobrazení pořadí jednotlivé ho slidu u každé karty !//
let generateCard = () => {
  return (card.innerHTML = cardData
    .map((e) => {
      const {
        id,
        slide,
        heading,
        discount,
        deal,
        img,
        weight,
        price,
        previousPrice,
        weightToPrice,
        inStock,
      } = e;
      return `
      <div class="swiper-slide">
      <card id=card-id-${id} class="product_item">
  <div class="inner_main_image_frame">
  <div class="intro_frame_styling">
    <h3 class="intro_heading_styling">${heading}</h3>
    <div class="stars-frame-styling">
      <div class="inner_stars_frame_styling">
        <img src="/Vizuální_podklady/hvezda.png" alt="stars_rating" />
        <img src="/Vizuální_podklady/hvezda.png" alt="stars_rating" />
        <img src="/Vizuální_podklady/hvezda.png" alt="stars_rating" />
        <img src="/Vizuální_podklady/hvezda.png" alt="stars_rating" />
        <img src="/Vizuální_podklady/hvezda.png" alt="stars_rating" />
      </div>
    </div>
  </div>
  <div class="main_product_frame">
    <div class="discount_favourite_frame">
      <div class="discount_deals_frame">
        <div class="discount_div_styling">
          <span class="discount_styling">${discount}</span>
        </div>
        <div class="deal_div_styling">
          <span class="deal_styling">${deal}</span>
        </div>
      </div>
      <div class="favourites_frame">
        <span class="heart_icon_styling">
          <i class="far fa-heart"></i>
        </span>
      </div>
    </div>

    <img
      class="main_product_image"
      src=${img}
      alt="product_image"
    />
  </div>
</div>
<div class="pricing_frame">
  <div class="weight_price_frame">
    <div class="weight_frame">
      <span class="weight_styling">${weight}</span>
    </div>
    <div class="price_frame">
      <div class="main_price_frame">
        <p class="main_price_paragraph">${price}</p>
        <p class="previous_price_paragraph">${previousPrice}</p>
      </div>
      <p class="price_to_weight_paragraph">${weightToPrice}</p>
    </div>

    <button id="basketBtn" class="basketButtonStyling">
      <div class="inner_button_div">
        <img
          class="basket_icon_styling"
          src="/Vizuální_podklady/basket.png"
        />

        Do košíku
      </div>
    </button>
    <div id="plus_minus_div" class="plus_minus_buttons_div_styling plusMinusDisplayNone">
      <div class="minus_button_div_styling">
        <button  id="minus_btn" class="minus_button_styling">
          <span class="minus_icon_styling">
            <i class="fas fa-minus"></i>
          </span>
        </button>
      </div>
      <div class="amount_div_styling">
        <p id="amount" class="amount_paragraph_styling">0</p>
      </div>
      <div class="plus_button_div_styling">
      <button  id="plus_btn" class="plus_button_styling">
      <span class="plus_icon_styling">
      <i class="fas fa-plus"></i>
      </span>
        </button>
        </div>
        </div>
        <div class="instock_div_styling">
        <p class="instock_paragraph_styling">${inStock}</p>
        </div>
        </div>
        </div>
        </card>
        </div>
        `;
    })
    .join(""));
};
generateCard();
const plusButton = document.querySelectorAll("div.plus_button_div_styling");
const minusButton = document.querySelectorAll("div.minus_button_div_styling");
const amount = document.querySelector("p.amount_paragraph_styling");

const basket = document.querySelectorAll("button.basketButtonStyling");
const inStock = document.querySelectorAll("div.instock_div_styling");
const plusMinus = document.querySelectorAll(
  "div.plus_minus_buttons_div_styling"
);

//! FOR LOOP PRO BASKET TLAČÍTKO !//
for (let i = 0; i < basket.length; i++) {
  basket[i].onclick = () => {
    increment();
    basket[i].classList.add("basketDisplayNone");
    plusMinus[i].classList.remove("plusMinusDisplayNone");
    inStock[i].classList.add("instock_top_atr");
  };
}

//! LOGIKA PRO +/- !//
let initialamount = 0;

const increment = () => {
  initialamount++;
  amount.textContent = initialamount;
};
const decrement = () => {
  initialamount--;
  amount.textContent = initialamount;
};

//! FOR LOOP PRO PLUS TLAČÍTKO !//
for (let i = 0; i < plusButton.length; i++) {
  plusButton[i].onclick = () => {
    increment();
  };
}

//! FOR LOOP PRO MÍNUS TLAČÍTKO !//
for (let i = 0; i < minusButton.length; i++) {
  minusButton[i].onclick = () => {
    if (amount.textContent > 1) {
      decrement();
    } else {
      decrement();
      basket[i].classList.remove("basketDisplayNone");
      plusMinus[i].classList.add("plusMinusDisplayNone");
      inStock[i].classList.remove("instock_top_atr");
    }
  };
}

//! ATRIBUTY PRO SWIPER !//
//! SWIPER SE MI SAMOVOLNĚ POHYBUJE A AKTUALIZUJE KDYŽ KLIKÁM NA RŮZNÉ ČÁSTI KARET !//
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  centerSlide: "true",
  fade: "true",
  // grabCursor: "true",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //! BREAKPOINTY PRO SWIPER !//
  breakpoints: {
    50: { slidesPerView: 1, spaceBetween: 100 },
    200: { slidesPerView: 2, spaceBetween: 120 },
    490: { slidesPerView: 2, spaceBetween: 10 },
    700: { slidesPerView: 3, spaceBetween: 0 },
    1200: { slidesPerView: 4, spaceBetween: 30 },
    1500: { slidesPerView: 5, spaceBetween: 0 },
    1870: { slidesPerView: 6, spaceBetween: 0 },
  },
});
