//rapidApi get request//
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e27dc73b7msha37b4944747157bp1bbd46jsn02e1ca376a29',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

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
    
 