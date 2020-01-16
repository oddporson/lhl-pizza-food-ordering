$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
  console.log('hello!');

  showCart();
  // Get existing cart from local storage if available

  $('.add-to-cart').on('click', function(e) {
    e.preventDefault();
    console.log('clicked!');
    const prodid = $(this).closest('.card').data('prodid');
    const prodname = $(this).closest('.card').data('prodname');
    const description = $(this).closest('.card').data('description');
    const price = $(this).closest('.card').data('price');
    // console.log('prodid', prodid);
    console.log('product name', prodname);
    console.log('product description', description);
    console.log('product price', price);
    let menuItem = window.localStorage.getItem(prodid);
    console.log('type of menuItem:', typeof menuItem);
    if (!menuItem) {
      menuItem = {id: prodid, name: prodname, description, price, quantity: 1};
      window.localStorage.setItem(prodid, JSON.stringify(menuItem));
    } else {
      menuItem = JSON.parse(menuItem);
      menuItem = {id: prodid, name: prodname, description, price, quantity: menuItem.quantity + 1};
      window.localStorage.setItem(prodid, JSON.stringify(menuItem));
      // menuItem = JSON.parse(menuItem);
    }

    // Read from local storage for cart contents
    let cart = readCart();
    if (!cart[menuItem.id]) {
      cart[menuItem.id] = {...menuItem, quantity: 0};
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
    // shoppingCart.append(showCart());

    // window.localStorage.setItem(prodid, "prodid");
  })

  $('.toggle-cart').click(function() {
    $('.cart').toggle();
  })

  // TO-DO: Do we need this or does it needs to be fixed?
  // Toggle down cart detail
  $('.nav-link').click(function() {
    console.log("clicked!")
    // $('.shopping_cart').toggle(function(){
    //   $('.shopping_cart').focus
    // });
  });


});
