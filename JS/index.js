 //cart 
    let cartIcon =document.querySelector("#cart-icon");
    let cart =document.querySelector(".cart");
    let closeCart =document.querySelector("#close-cart");
    //open cart
    cartIcon.onclick= ()=> {
        cart.classList.add("active");
    };
    // close cart
    closeCart.onclick= ()=> {
        cart.classList.remove("active");
    };

    //cart working js
    if (document.readyState== 'loading'){
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready();
    }

    //making  function 
    function ready(){
        //remove items from cart
        var removeCartButtons =document.getElementsByClassName('cart-remove')
        console.log(removeCartButtons)
        for (var i =0; i< removeCartButtons.length; i++){
            var button =removeCartButtons[i]
            button.addEventListener('click', removeCartItem)
        }
    }

    function removeCartItem(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateTotal();
    }
    //update total
    function updateTotal(){
        var cartContent =document.getElementsByClassName("cart-content")[0];
        var cartBoxes = cartContent.getElementsByClassName("cart-box");
        var total =0; 
        for (var i =0; i< cartBoxes.length; i++) {
            var cartBox= cartBoxes[i];
            var priceElement= cartBox.getElementsByClassName("cart-price")[0];
            var quantityElement= cartBox.getElementsByClassName("cart-quantity")[0];
            var price= parseFloat(priceElement.innerText.replace("ksh", ""));
            var quantity =quantityElement.value;
            total= total+ (price*quantity);


            document.getElementsByClassName("total-price")[0].innerText= "ksh" + total;
        }

    }
 