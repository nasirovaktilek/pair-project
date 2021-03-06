export function getCountProductsCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export function calcSubPrice(product) {
  return product.count * product.item.price; // сумма одного продукта(количество * цену)
}

export function calcTotalPrice(products) {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
}
