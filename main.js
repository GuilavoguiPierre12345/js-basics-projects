//=====================================PANIER=============================================
// cette variable recupère l'icone du panier sur la page html
let cartIcon = document.querySelector('#icone-panier');
//cette variable selectionne le bloc principal du  panier qui a pour classe .cart
let cart = document.querySelector('.cart');
//cette variable selectionne le bouton de fermeture du panier
let closeCart = document.querySelector('#close-cart');


// code  d'ouverture du panier
cartIcon.onclick = () => {          //lorsqu'on clique sur l'icone du panier
    cart.classList.add("active");   //ajout de la classe 'active' sur la liste des classes du panier
};
//code de fermeture du panier
closeCart.onclick = () => {        //lorsqu'on clique sur l'icone du panier
    cart.classList.remove("active");    //retirer la classe 'active' de la liste  des classes du panier
};

//activité du panier

if(document.readyState=='loading'){ //si l'état du document est prêt en chargement
    document.addEventListener('DOMContentLoaded',prototypesFonctions); //ajouter un évènement en écoute sur le document
}else{
    prototypesFonctions();
}

//code des mises en écoute des actions du panier
function prototypesFonctions(){

    //supprimer un élément du panier
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for(var i=0;i<removeCartButtons.length;i++){
        var button = removeCartButtons[i];
        button.addEventListener('click',removeCartItem);
    }
    //changement de quantité du produit 
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i=0;i<quantityInputs.length;i++){
        var input =quantityInputs[i];
        input.addEventListener('change',quantityChanged);
    }
    //ajout dans le panier
    var addCart = document.getElementsByClassName('add-cart');
    for (var i=0;i<addCart.length;i++){
        var button =addCart[i];
        button.addEventListener('click',addCartClicked);
    }
    //bouton d'achat
    document.getElementsByClassName('btn-buy')[0].addEventListener('click',BuyButtonClicked);

}


//fonction du bouton d'achat
function BuyButtonClicked(){
    alert('Your Order Is Placed');
    var cartContent=document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}


//fonction de suppression d'un élément du panier
function removeCartItem(event){
    var buttonClicked =event.target
    buttonClicked.parentElement.remove()    //le bouton de suppression supprime son element parent 
    updateTotal();  //mise à jour du total après chaque suppression
}

//fonction de Changement de la quantité d'un produit
function quantityChanged(event){
    var input=event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value=1;
    }
    updateTotal(); //mise à jour du total après chaque changement de quantité
}

//fonction d'ajout dans le panier
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title,price,productImg);

    updateTotal();  //mise à jour du prixTotal après ajout d'un nouveau element dans le panier
}
function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement("div");    //création d'un élément div dans le document html
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName('cart-content')[0]; 
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');    //recupère les noms de tous les produits dans le panier
    for(var i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i]==title){
            alert('You have add this Item to cart !!');
            return;
        }   
    }

var cartBoxContent = `
            <img src="${productImg}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <!-- Remove cart    -->
            <i class="glyphicon glyphicon-trash cart-remove">Sup</i>`;
cartShopBox.innerHTML = cartBoxContent //un élément du panier prend le contenu de la variable cartBoxContent
cartItems.append(cartShopBox); //ajoute 
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem) ;
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantityChanged);
}


//Mise à jour du total
function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total=0;
    for(var i=0;i<cartBoxes.length;i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("GNF",""));
        var quantity= quantityElement.value;
        total += quantity*price ;
        
        document.getElementsByClassName("total-price")[0].innerText=`GNF${total}`;
    }
}

