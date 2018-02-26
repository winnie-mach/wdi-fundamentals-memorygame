
var cards = [
{ //OBJECT 1 (3 PROPERTIES: rank, suit, cardImage)
    rank: "queen", //ADD COMMA AFTER PROPERTIES!!!!
    suit: "hearts", //ADD COMMA AFTER PROPERTIES!!!!
    cardImage: "images/queen-of-hearts.png" //NO NEED FOR COMMA ON LAST PROPERTY
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
}
];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.length === 2)  {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		//console.log("You found a match!"); intructions showed console.log but deliverable shows alert.
	} else {
		alert("Sorry, try again.");
		//console.log("Sorry, try again."); intructions showed console.log but deliverable shows alert.
	}
}
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id'); //QUESTION!! Don't think we touched on .getAttribute
	this.setAttribute('src', cards[cardId].cardImage); // Moved this from the checkForMatch function down here. 
	console.log("User flipped " + cards[cardId].rank); //cards[0] <-- replaced index number of array with cardId, the parameter we enter in when calling the function. 
	cardsInPlay.push(cards[cardId].rank); // cards[cardId].rank <--- dot notation to specify which 'property' we want to access.
	checkForMatch();
	console.log(cards[cardId].cardImage); //.cardImage property
	console.log(cards[cardId].suit); //.suit property
};


var createBoard = function() {  //This function creates a new game board. 
	for (var i = 0; i < cards.length; i++) { //A for loop to loop through the objects in the array 'cards'.
        /* We're now going to create an img element using createElement method and store it
        in a variable called cardElement. Below is step 1 of the createElement method*/
		var cardElement = document.createElement('img'); 
		/* Use the .setAttribute() method to add a 'src' attribute for the cardElement then the image  
		of the back of card "images/back.png" as the value of the src attribute. */
		cardElement.setAttribute('src', "images/back.png");
		/* Use the .setAttribute() method again to add a 'data-id' attribute to the cardElement then 
		assign the index of the current element. i.e. i */
		cardElement.setAttribute('data-id', i);
		/* The cardElement is our element, use the .addEventListener() method to add an event 
		(i.e. 'click', when user clicks a card), and when that event occurs, we want to run the function 'flipCard'
		function we created above. */
		cardElement.addEventListener('click', flipCard);
		/* Step 3 of createElement method: using the .appendChild method to attach the cardElement back to 
		it's parent, which has an element Id of 'game-board' as we've defined in our index.html page. */
		document.getElementById("game-board").appendChild(cardElement);


	}
};


createBoard();

/* FIRST ISSUE: main.js:65 Uncaught TypeError: Cannot read property 'appendChild' of null
    at createBoard (main.js:65)
    at main.js:71 don't understand why it can't find the parent. */

/* SECOND ISSUE: JSBin and JSLint has detected that 'cardID' is not defined. Which they're right
because the var cardId is a local variable, defined within the fliCard() function. But we've called upon
the cardId in line 26 but adding it in the .setAttribute method inside the checkForMatch() function */



