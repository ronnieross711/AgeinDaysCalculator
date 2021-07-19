// First start with a function.

function ageInDays() {
    let birthYear = prompt("What year were you born?");
    let ageInDayss = (2018 - birthYear) * 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode(
      "You are " + ageInDayss + " days old"
    );
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
    console.log(ageInDayss);
  }
  
function reset() {
    document.getElementById("ageInDays").remove();
  }