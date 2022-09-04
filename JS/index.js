
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
    console.log(response.content)
	.catch(err => console.error(err));


 var myForm = document.getElementById('new');
 
 myForm.addEventListener('submit', function(event){
	 //event.preventDefault()
	 var username = document.getElementById('fname').value;
	 var email =document.getElementById('email').value;
	 alert (username+ 'your request has been received!')
 });
