const defaultProducts = [

            {
                id: 1,
                img: "assets/3307399721972270.jpeg",
                title: "Flight Jacket Mirage",
                price: 20.0,
                tag: "sale",
                tagClass: "bg-black",
                cat: "jaket", 
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 2,
                img: "assets/shirt/linkin park meteora shirt.jpeg",
                title: "Linkin Park Meteora Green T-Shirt",
                price: 7.0,
                tag: "new",
                tagClass: "bg-green",
                cat: "kaos",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 3,
                img: "assets/accessories/New Arrivals _ California Sportswear _ Stüssy.jpeg",
                title: "Stussy Blue Skull Cap",
                price: 15.0,
                tag: "",
                tagClass: "",
                cat: "Accessories",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 4,
                img: "assets/pants/VAGUE Studios.webp",
                title: "Army Cargo Pants",
                price: 12.0,
                tag: "sale",
                tagClass: "bg-black",
                cat: "celana", 
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 5,
                img: "assets/shirt/METALLICA KILL 'EM ALL VINTAGE T-SHIRT - XXS _ HEAVY RELIC BLACK.webp",
                title: "Metallica Kill Em All T-shirt",
                price: 7.0,
                tag: "",
                tagClass: "",
                cat: "kaos",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 6,
                img: "assets/By_ @smoothcactusstore   Shop similar products….jpeg",
                title: "TNF Black On Grey Jacket",
                price: 60.0,
                tag: "Hot",
                tagClass: "bg-red",
                cat: "jaket",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 7,
                img: "assets/pants/Vintage Denim Pants.jpeg",
                title: "Blue Bionic Jeans",
                price: 5.0,
                tag: "sale",
                tagClass: "bg-black",
                cat: "celana", 
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 8,
                img: "assets/shirt/Slipknot Distressed Graphic Tee.jpeg",
                title: "Slipknot Black Fire T-Shirt",
                price: 10.0,
                tag: "",
                tagClass: "",
                cat: "kaos",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 9,
                img: "assets/For Sale_ Adidas Chinese New Year Heavy Jacket….webp",
                title: "Adidas CTT Blue",
                price: 90.0,
                tag: "",
                tagClass: "",
                cat: "jaket",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 10,
                img: "assets/pants/114208540546934960.webp",
                title: "Nike Tracker Pants",
                price: 55.0,
                tag: "sale",
                tagClass: "bg-black",
                cat: "celana", 
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 11,
                img: "assets/shirt/coolest weezer shirt tbh.webp",
                title: "WEEZER White T-Shirt",
                price: 8.0,
                tag: "new",
                tagClass: "bg-green",
                cat: "kaos",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 12,
                img: "assets/Search_ 11 results found for _.webp",
                title: "Carhartt Caramel",
                price: 60.0,
                tag: "Hot",
                tagClass: "bg-red",
                cat: "jaket",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 13,
                img: "assets/pants/Depop Men's Jeans $70_00.webp",
                title: "Baggy Grey Jeans",
                price: 15.0,
                tag: "",
                tagClass: "",
                cat: "celana",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            },
            {
                id: 14,
                img: "assets/accessories/nike triax.jpeg",
                title: "Nike Triax Watch",
                price: 30.0,
                tag: "Hot",
                tagClass: "bg-red",
                cat: "Accessories",
                desk : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iste quas, quae magni voluptate quia ipsam architecto rem natus facilis? Ratione necessitatibus, a inventore unde magni voluptates maiores non pariatur."
            }

];
let products = JSON.parse(localStorage.getItem("products"));

if (!products) {
    products = defaultProducts;
    localStorage.setItem("products", JSON.stringify(defaultProducts));
}

function renderProduk(list) {
            const grid = document.getElementById("productGrid");

            let codePerCard = "";

            for (let i = 0; i < list.length; i++) {
                const produk = list[i];
                codePerCard += `
      <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div class="product">
          <img src="${produk.img}" alt="${produk.title}">
          <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            <li class="icon" onclick="masukandataitem(${produk.id})"><span class="fas fa-expand-arrows-alt"></span></li>
            <li class="icon" onclick="addToCart(${produk.id})"><span class="fas fa-shopping-bag"></span></li>
          </ul>
          <div class="tag ${produk.tagClass || ''}">${produk.tag || ''}</div>
        </div>
        <div class="title pt-4 pb-1">${produk.title}</div>
        <div class="price">$ ${produk.price.toFixed(1)}</div>
      </div>
    `;
            }
            grid.innerHTML = codePerCard;
}

function filterProduk(kategori) {
            const semualink = document.querySelectorAll('#myNav .nav-link');
            for (let i = 0; i < semualink.length; i++) {
                semualink[i].classList.remove('active');
            }
            event.target.classList.add('active');

            if (kategori === 'all') {
                renderProduk(products);
            } else {
                const filtered = [];
                for (let i = 0; i < products.length; i++) {
                    if (products[i].cat === kategori) {
                        filtered.push(products[i]);
                    }
                }
                renderProduk(filtered);
            }
}

function toggleCartPopup(event) {
            event.preventDefault();
            const cartPopup = document.getElementById('cartPopup');
            if (cartPopup.style.display === 'none' || cartPopup.style.display === '') {
                cartPopup.style.display = 'block';
            } else {
                cartPopup.style.display = 'none';
            }
}

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function totalCartIcon(){
            document.getElementById('totalCart').textContent = cartItems.length;
}

function addToCart(productId) {
            let produk = null;
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === productId) {
                    produk = products[i];
                    break;
                }
            }
            if (!produk) {
                alert("Produk sudah tidak tersedia.");
                return;
            }

            let adaDiCart = false;
            for (let j = 0; j < cartItems.length; j++) {
                if (cartItems[j].id === productId) {
                    adaDiCart = true;
                    break;
                }
            }

            if (!adaDiCart) {
                cartItems.push({
                id: produk.id,
                img: produk.img,
                title: produk.title,
                price: produk.price
            });
            }

            renderCart();
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            document.getElementById('cartPopup').style.display = 'block';
            
}

function removeFromCart(productId) {
            let newCart = [];
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id !== productId) {
                    newCart.push(cartItems[i]);
                }
            }
            cartItems = newCart;
            renderCart();
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
 
function renderCart() {
            let container = document.getElementById('cartItemsContainer');
            let subtotalEl = document.getElementById('cartSubtotal');
            let totalEl = document.getElementById('cartTotal');

            if (cartItems.length === 0) {
                container.innerHTML = '<p class="text-muted">Keranjang masih kosong.</p>';
                subtotalEl.textContent = '$0.00';
                totalEl.textContent = '$5.00';
                
                totalCartIcon();

                return;
            }

            let str = '';
            let subtotal = 0;

            for (let i = 0; i < cartItems.length; i++) {
                let item = cartItems[i];
                let itemTotal = item.price;
                subtotal += itemTotal;

                str += `
                <div class="cart-item d-flex justify-content-between">
                    <div class="d-flex">
                        <img src="${item.img}" alt="${item.title}" class="product-img me-3">
                        <div>
                            <h5>${item.title}</h5>
                            <p class="text-muted">$${item.price.toFixed(2)} / item</p>
            
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-between">
                        <span>$${itemTotal.toFixed(2)}</span>
                        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
                `;
            }

            container.innerHTML = str;
            subtotalEl.textContent = '$' + subtotal.toFixed(2);
            totalEl.textContent = '$' + (subtotal + 5).toFixed(2);

            totalCartIcon();
}

function masukandataitem(productid) {
            for (const perProduct of products) {
                if (perProduct.id === productid) {
                    let item = {
                        id: perProduct.id,
                        img: perProduct.img,
                        title: perProduct.title,
                        price: perProduct.price,
                        tag: perProduct.tag,
                        tagClass: perProduct.tagClass,
                        cat: perProduct.cat,
                        desk: perProduct.desk
                    }

                    localStorage.setItem("item", JSON.stringify(item));
                    window.location.href = "desc.html"; 
                }
            }
}
        
renderCart();
renderProduk(products);
totalCartIcon()