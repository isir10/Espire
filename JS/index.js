
document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("heading").textContent = "These are cool!!";
});

let myForm = document.getElementById("new");
myForm.addEventListener("submit", (e) =>{
  e.preventDefault()

  let formData =new FormData(e.target)
  let fullName = document.getElementById("fname").value
  // alert("djddsa")
  let myEmail = document.getElementById("email").value
  // alert(myEmail)
  

});
$(document).ready(function(){
    $("#sub").click(function(){
      
          alert("Your request has been received and is being worked on.Further communications on payment and delivery shall be made through your email address entered above ");
      
      //  else {
      //      alert("Please fill in the details for delivery!");
         
          
        
    })
  });
