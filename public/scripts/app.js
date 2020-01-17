$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;


  showCart();
  updateTotal();
  // Get existing cart from local storage if available

  $('.add-to-cart').on('click', function (e) {
    e.preventDefault();
    console.log('clicked!');
    const prodid = $(this).closest('.card').data('prodid');
    const prodname = $(this).closest('.card').data('prodname');
    const description = $(this).closest('.card').data('description');
    const price = $(this).closest('.card').data('price');
    let menuItem = window.localStorage.getItem(prodid);
    if (!menuItem) {
      menuItem = { id: prodid, name: prodname, description, price, quantity: 1 };
      window.localStorage.setItem(prodid, JSON.stringify(menuItem));
    } else {
      menuItem = JSON.parse(menuItem);
      menuItem = { id: prodid, name: prodname, description, price, quantity: menuItem.quantity + 1 };
      window.localStorage.setItem(prodid, JSON.stringify(menuItem));

    }

    // Read from local storage for cart contents
    let cart = readCart();
    if (!cart[menuItem.id]) {
      cart[menuItem.id] = { ...menuItem, quantity: 0 };
    }
    // Add/update menu item in cart
    cart[menuItem.id].quantity++;
    // Save cart
    saveCart(cart);
    // Render cart contents to HTML
    const shoppingCart = $('#shopping_cart');
    shoppingCart.empty();
    showCart();
    updateTotal();

  })

  $('.cart').on('click', '.remove-item', function (e) {
    e.preventDefault();
    window.localStorage.removeItem($(this).data('item'));
    let cart = JSON.parse(window.localStorage.getItem('CART'));
    delete cart[$(this).data('item')]
    window.localStorage.setItem('CART', JSON.stringify(cart));
    const shoppingCart = $('#shopping_cart');
    shoppingCart.empty();
    showCart();
    updateTotal();
  })

  $('.toggle-cart').click(function () {
    $('.cart').toggle();
  })

  $('#place-order').click(function () {
    console.log('hi')
    $.ajax({
      method: "GET",
      url: "/cart/order",
      data: {
      }
    })
  })

});
