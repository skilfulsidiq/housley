var acc = document.getElementsByClassName("accordion");
var parentDrop = document.getElementsByClassName("faq");
var arrow = document.getElementById("arrow-image");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
	this.parentNode.classList.toggle("dropped");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
	//   arrow.src = "../../img/arrowDown.svg";
    } else {
      panel.style.display = "block";

    }	
	// arrow.src = "../../img/arrowUp.svg";

  });
}