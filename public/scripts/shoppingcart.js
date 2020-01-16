
  const cartStorageKey = 'CART';
  function readCart() {
    console.log('readCart:', (window.localStorage.getItem(cartStorageKey)));
    return JSON.parse(window.localStorage.getItem(cartStorageKey) || '{}');
  }

  function saveCart(cart) {
    window.localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  }

  function updateTotal() {
    //get all itemswindow.localStorage.setItem(
       //loop through the items to get a total
    let total = 0
    for(let item of Object.keys(window.localStorage)) {
      if(JSON.parse(window.localStorage.getItem(item)).price) {
        console.log('why', JSON.parse(window.localStorage.getItem(item)))
        total += JSON.parse(window.localStorage.getItem(item)).price * JSON.parse(window.localStorage.getItem(item)).quantity
      }
    }




    $('#total').text(total);
  }

  function removeItemFromCart() {
    // TODO
  $( ".btn.btn-danger.btn-sm" ).remove(item)
  }

  function showCart() {
    const cart = readCart();
    // Cart is an object; we are only interested in values from the key-value pairs
    const cartItems = Object.values(cart).map(function (item) {
      console.log('cart item:', item);
      return $(`
      <tr>
      <td data-th="Product">
        <div class="row">
          <!-- the img code is causing image to overlap the naming. -->
          <!-- <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div> -->
          <div class="col-sm-10">
            <h4 class="nomargin product-name">${item.name}</h4>
            <p class="product-description">${item.description}</p>
          </div>
        </div>
      </td>
      <td class="product-price" data-th="Price">$${item.price}</td>
      <td data-th="Quantity">${item.quantity}</td>
      <td data-th="Subtotal" class="text-center">${item.price * item.quantity}</td>
      <td class="actions" data-th="">
        <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
      </td>
    </tr>`);
    });
    console.log('cart items:', cartItems);
    return $("#shopping_cart").append(cartItems);
  }
