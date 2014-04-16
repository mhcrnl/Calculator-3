// use strict

 
function numPressed(num) {
  //  var alertMessage = "You clicked the " + num + " button";
  //  alert(alertMessage);
    updateDisplay(num);
}

function updateDisplay(num) {
     if( document.getElementById("display").value == "0.") {
        document.getElementById("display").value = num;
     } else {
         document.getElementById("display").value += num;
     }

}

function clearNumbers() {

    document.getElementById("display").value = "0.";
}

function addOperator(num) {
 document.getElementById("display").value += num;
}
           
 function mouseDown() {
  
     this.style.backgroundColor="#333333";
     this.style.border="3px solid blue";
 }
    


    