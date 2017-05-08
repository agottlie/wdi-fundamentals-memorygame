var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
];
var cardsInPlay = [];
var wins=0;
var losses=0;
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      	alert("You found a match!");
      	wins+=1;
      	document.getElementById('wins').textContent = 'Wins: ' + wins;
  	} else {
    	alert("Sorry, try again.");
    	losses+=1;
    	document.getElementById('losses').textContent = 'Losses: ' + losses;
  	}
  	cardsInPlay.length=0;
  	for (i=0; i<cards.length; i++) {
  		document.getElementsByTagName('img')[i].setAttribute('src', "images/back.png");
  	}
}
var flipCard = function() {
	cardId = this.getAttribute('data-id');
	
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

var createBoard = function() {
	for (i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

