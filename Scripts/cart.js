const cart = [];


document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    let matchingItem;

    let productId = button.dataset.productId;

    cart.forEach((item) => {
      if (productId === item.productId) matchingItem = item;
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});
