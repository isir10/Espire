
document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("heading").textContent = "These are cool!!";
});
var form = document.getElementById('new');

function myFunction() {
  if (form.checkValidity()) {
    alert("Adding Succesful!");
  }
};
