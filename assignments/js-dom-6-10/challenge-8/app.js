document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    
    window.addToCart = function(product, price) {
       pushToCart({product,price})
    }

    function pushToCart(product){
        cart.push(product)
        
        console.log(cart);          
        
        displayOnBrowser()
    }

    function displayOnBrowser(){
        console.log("cart is displaying...");
    }

});
