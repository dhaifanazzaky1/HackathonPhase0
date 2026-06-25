let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let checkoutContainer = document.getElementById('checkoutItems');
let subtotal = 0;

function renderCheckout(){
    checkoutContainer.innerHTML = '';
    subtotal = 0;

    if(cartItems.length === 0){
        checkoutContainer.innerHTML=`<div class="empty-cart">
                <h3>Tambahkan Produk.</h3>
            </div>`;
        
            document.getElementById('subtotalText').innerHTML = '$0.00';
            document.getElementById('summarySubtotal').innerHTML = '$0.00';
            document.getElementById('summaryTotal').innerHTML = '$0.00';
            return;
    }

    for(let i = 0; i < cartItems.length; i++){
        let item = cartItems[i];
        subtotal += item.price;

        checkoutContainer.innerHTML += `<div class="checkout-item">
                <div class="checkout-image">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="checkout-detail">
                    <h3>${item.title}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <div class="checkout-price">
                    <h3>$${item.price.toFixed(2)}</h3>
                </div>
            </div>`;
    }

    let total = subtotal + 5;
    document.getElementById('subtotalText').innerHTML = '$' + subtotal.toFixed(2);
    document.getElementById('summarySubtotal').innerHTML = '$' + subtotal.toFixed(2);
    document.getElementById('summaryTotal').innerHTML = '$' + total.toFixed(2);
}
renderCheckout()

// Payement 
function checkoutOrder(){
    let nama = document.getElementById('fullName').value
    let phone = document.getElementById('phoneNumber').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let city = document.getElementById('city').value
    let postal = document.getElementById('postalCode').value
    let payment = document.getElementById('paymentMethod').value

    if (nama == '' || phone == '' || email == ''|| address == ''|| city == ''
        || postal == ''|| payment == ''){
        
        alert('Mohon lengkapi data pengiriman.')
        return;
    }

    let order = {
        customer : nama,
        phone : phone,
        email : email,
        address : address,
        city : city,
        postal : postal,
        payment : payment,
        items : cartItems,
        subtotal : subtotal,
        pengiriman : 5,
        total : subtotal + 5
    };

    //Data Produk
    let products = JSON.parse(localStorage.getItem('products')) || [];

    //Hapus produk yang udah di checkout
    let newProducts = [];
    for (let i = 0; i < products.length; i++){
        let found = 0;

        for(let j = 0; j < cartItems.length; j++){
            if(products[i].id === cartItems[j].id){
                found++
            }
        }

        if(found === 0){
            newProducts.push(products[i]);
        }
    }
    localStorage.setItem('products', JSON.stringify(newProducts));

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);

    localStorage.setItem('orders', JSON.stringify(orders));

    localStorage.removeItem('cartItems');
    cartItems =[];

    alert('Terima Kasih Sudah Berbelanja di RETRVERSE');
    window.location.href='homepage.html';

}