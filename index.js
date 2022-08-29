"use strict";

// const minus = document.querySelectorAll(".minus_button_styling");
// const plus = document.querySelectorAll(".plus_button_styling");
// const plusMinusDiv = document.getElementById("plus_minus_div");
// const amount = document.getElementById("amount_paragraph");

// let initialamount = 0;

// amount.textContent = initialamount;

// const decrement = () => {
//   initialamount--;
//   amount.textContent = initialamount;
// };
// const increment = () => {
//   initialamount++;
//   amount.textContent = initialamount;
// };

// // plusMinusDiv.style.display = "none";

// amount.addEventListener("click", () => {
//   console.log("clicked_paragraph");
// });

// for (let i = 0; i < plusMinusDiv.length; i++) {
//   plusMinusDiv[i];
// }

// // const inital = () => {
// //   plusMinusDiv.style.display = "none";
// // };

// // minus.addEventListener("click", decrement);

// for (let i = 0; i < minus.length; i++) {
//   minus[i].onclick = function () {
//     decrement();
//   };
// }

// // minus.addEventListener("click", () => {
// //   console.log("MINUS CLICKED");
// // });
// // plus.addEventListener("click", () => {
// //   console.log("PLUS CLICKED");
// // });

// for (let i = 0; i < minus.length; i++) {
//   minus[i].onclick = () => {
//     console.log("➖");
//   };
// }
// for (let i = 0; i < plus.length; i++) {
//   plus[i].onclick = () => {
//     console.log("➕");
//   };
// }

let card = document.getElementById("product");

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
    <div id="plus_minus_div" class="plus_minus_buttons_div_styling">
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
const plusButton = document.querySelectorAll(".plus_button_styling");
const minusButton = document.querySelectorAll(".minus_button_styling");
const amount = document.querySelectorAll(".amount");

const basket = document.querySelectorAll("button.basketButtonStyling");
const plusMinus = document.querySelectorAll(
  "div.plus_minus_buttons_div_styling"
);

for (let i = 0; i < basket.length; i++) {
  basket[i].onclick = () => {
    basket[i].classList.add("basketDisplayNone");
    plusMinus[i].classList.remove("plusMinusDisplayNone");
    console.log("basket_clicked");
  };
}

// amount.addEventListener("click", function () {
//   console.log("textarea clicked");
// });

let initialamount = 0;

for (let i = 0; i < plusButton.length; i++) {
  plusButton[i].onclick = () => {
    initialamount = initialamount + 1;
    amount.innerText = initialamount;

    console.log("plus clicked");
  };
}
for (let i = 0; i < minusButton.length; i++) {
  minusButton[i].onclick = () => {
    initialamount = initialamount - 1;
    amount.innerHTML = initialamount;
    console.log("minus clicked");
  };
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    navigationDisabledClass: ".swiper-navigation-disabled",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-navigation-disabled",
        prevEl: ".swiper-navigation-disabled",
      },
      nextEl: "swiper-navigation-disabled",
      prevEl: "swiper-navigation-disabled",
    },
    200: {
      slidesPerView: 1,
      nextEl: "swiper-button-disabled",
      prevEl: "swiper-button-disabled",
      spaceBetween: 0,
    },
    490: {
      slidesPerView: 2,
      nextEl: "swiper-button-disabled",
      prevEl: "swiper-button-disabled",
    },
    700: {
      slidesPerView: 3,
      nextEl: "swiper-button-disabled",
      prevEl: "swiper-button-disabled",
    },
    1200: { slidesPerView: 4 },
    1500: { slidesPerView: 5 },
    1870: { slidesPerView: 6 },
  },
});

// const increment = (id) => {
//   const selectedCard = id;
//   console.log(id);
// };
// const decrement = (id) => {
//   const selectedCard = id;
//   console.log(id);
// };
// const value = () => {};

// amount.textContent = initialamount;

// const decrement = () => {
//   initialamount--;
//   amount.textContent = initialamount;
// };
// const increment = () => {
//   initialamount++;
//   amount.textContent = initialamount;
// };
