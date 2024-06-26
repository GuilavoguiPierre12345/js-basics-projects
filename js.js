// cart 
const cart = document.querySelector('.cart');
// open cart 
const iconePanier = document.querySelector('#icone-panier');
// close cart
const closeCart = document.querySelector('#close-cart');

// ouverture du panier
iconePanier.onclick = () => {
    cart.classList.add('active');
}
// fermeture du panier
closeCart.onclick = () => {
    cart.classList.remove('active');
}

// call all prototypes 
if (document.readyState =='loading') {
    document.addEventListener('DOMContentLoaded', allPrototypes);
} else {
    allPrototypes();
}

function allPrototypes() {
    //prototype delete cart item 
    let cartRemove = document.querySelectorAll('.cart-remove');
    for (let i = 0; i < cartRemove.length; i++) {
        let removeBtn = cartRemove[i];
        removeBtn.addEventListener('click', removeCartItem);
    }
    //prototype update quantity 
    let quantitys = document.querySelectorAll('.cart-quantity');
    for (let i = 0; i < quantitys.length; i++) {
        let qte = quantitys[i];
        qte.addEventListener('change', updateQuantity);
    }
    // prototype add function
    let addCartBtns = document.querySelectorAll('.add-cart');
    for (let i = 0; i < addCartBtns.length; i++) {
        let addCartBtn = addCartBtns[i];
        addCartBtn.addEventListener('click',addBtnClicked);
    }
}

 // définition de la fonction removeCartItem
 function removeCartItem(event) {
    let item = event.target;
    item.parentElement.remove();
    updataTotal();
}

// définition de la fn updateQuantity
function updateQuantity(event) {
    let input = event.target ;
    if(isNaN(input.value) || input.value<=0) {
        input.value = 1 ;
    }
    updataTotal();
}

function addBtnClicked(event) {
    let btn = event.target;
    let productBox = btn.parentElement ;
    let productTitle = productBox.querySelector('.product-title').innerText;
    let productImg = productBox.querySelector('.product-img').src;
    let productPrice = productBox.querySelector('.price').innerText;
    addCart(productTitle,productImg,productPrice);
}

// définition addCart 
function addCart(title,img,price) {
    console.log({title: title});
    let newDiv = document.createElement('div'); //création de la balise div
    newDiv.classList.add('cart-content'); // ajout de la class cart-content sur la liste des class de newDiv
    let newDivContent = `
        <img src="${img}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" min="1" value="1" class="cart-quantity">
        </div>
        <!-- Remove cart    -->
        <i class="glyphicon glyphicon-trash cart-remove">del</i>
    `;
    newDiv.innerHTML = newDivContent;
    cart.appendChild(newDiv);
    updataTotal();
    // console.log(cart);
    let cartRemove = newDiv.querySelector('.cart-remove');
    cartRemove.addEventListener('click',removeCartItem);
    let quantity = newDiv.querySelector('.cart-quantity');
    quantity.addEventListener('change',updateQuantity);
}
// définition de la fonction total
function updataTotal() {
    var total = 0 ;
    var cartContent = document.querySelectorAll('.cart-content');
    for (let i = 0; i < cartContent.length; i++) {
        var detailBox = cartContent[i].querySelector('.detail-box');
        var cartPrice = parseFloat(detailBox.querySelector('.cart-price').innerText);
        var cartQuantity = parseFloat(detailBox.querySelector('.cart-quantity').value);
        total += cartPrice*cartQuantity;

        document.querySelector('.total-price').innerText= `${total}GNF`;
    }
}