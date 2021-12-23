const buttonMenu = document.querySelector(".button-menu");

buttonMenu.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
  });

  const menuMobile = document.querySelector(".menu-mobile");
  const body = document.querySelector("body");
  const iButton = document.querySelector(".icon");

  menuMobile.classList.toggle("active");

  const menuActive = menuMobile.classList.contains("active");

  body.style.overflow = menuActive ? "hidden" : "auto";

  menuActive
    ? iButton.classList.replace("icon-menu", "icon-close")
    : iButton.classList.replace("icon-close", "icon-menu");
});

const more = document.querySelector(".more");
const less = document.querySelector(".less");
const labelCountProduct = document.querySelector(".countProduct");
let valueCountProduct = 0;

labelCountProduct.innerText = valueCountProduct;

more.addEventListener("click", () => {
  labelCountProduct.innerText = ++valueCountProduct;

  labelCountProduct.classList.add("activeCount");

  setTimeout(() => {
    labelCountProduct.classList.remove("activeCount");
  }, 200);
});

less.addEventListener("click", () => {
  value = valueCountProduct > 0 ? --valueCountProduct : 0;

  labelCountProduct.innerText = value;

  labelCountProduct.classList.add("activeCount");

  setTimeout(() => {
    labelCountProduct.classList.remove("activeCount");
  }, 200);
});
