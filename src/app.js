import "bootstrap";
import "./style.css";


window.onload = function () {

  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suit = ["suit-hearts", "suit-diamonds", "suit-spades", "suit-clubs"];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomSuitNumber = Math.floor(Math.random() * suit.length);
  document.getElementById('cardContent').innerHTML = cardNumber[randomCardNumber];
  document.getElementById('theCard').className = "card " + suit[randomSuitNumber];
}




