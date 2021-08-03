var currentTaby = 1; // Current tab is set to be the first tab (0)
showTaby(currentTaby); // Display the current tab

function showTaby(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("taby");
  x[n].style.display = "grid";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtnStep").style.display = "none";
  } else {
    document.getElementById("prevBtnStep").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtnStep").innerHTML = "Finish";
  } else {
    document.getElementById("nextBtnStep").innerHTML = "Continue";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrevStep(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("taby");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateFormy()) return false;
  // Hide the current tab:
  x[currentTaby].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTaby = currentTaby + n;
  // if you have reached the end of the form...
  if (currentTaby >= x.length) {
    // ... the form gets submitted:
    document.getElementById("stepForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTaby(currentTaby);
}

function validateFormy() {
	// This function deals with validation of the form fields
	var x, y, i, valid = true;
	x = document.getElementsByClassName("taby");
	y = x[currentTaby].querySelectorAll(".gridy .grid-child input");
	// A loop that checks every input field in the current tab:
	for (i = 0; i < y.length; i++) {
	  // If a field is empty...
	  if (y[i].value == "") {
		// add an "invalid" class to the field:
		y[i].className += " invalid";
		// and set the current valid status to false
		valid = false;
	  }
	}
	// If the valid status is true, mark the step as finished and valid:
	if (valid) {
	  document.querySelectorAll(".step .text")[currentTaby].className += " finish";
	  document.querySelectorAll(".step .number")[currentTaby].className += " finish";
	  document.querySelectorAll(".step .number")[currentTaby].innerHTML = " <img src=\"./assets/img/tinyMark.svg\" alt=\"tinyMark\"> ";
	}

	return valid; // return the valid status
	
  }


function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step"),line1 = document.getElementById("line1"),line2 = document.getElementById("line2"), stepText = document.querySelectorAll(".step .text"), stepNumber = document.querySelectorAll(".step .number");
  for (i = 0; i < x.length; i++) {

    stepText[i].className = stepText[i].className.replace(" active", "");
    stepNumber[i].className = stepNumber[i].className.replace(" active", "");

  }
  //... and adds the "active" class on the current step:
  stepText[n].className += " active";
  stepNumber[n].className += " active";

  if(stepText[0].classList.contains("finish")){
	line1.className += " finish";
}
if(stepText[1].classList.contains("finish")){
	line2.className += " finish";
}
}


