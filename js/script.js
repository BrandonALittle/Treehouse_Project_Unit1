/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/


var quotes = [
  {quote: "I'm sorry. If you were right, I'd agree with you.", 
   source: "Robin Williams",
   profession: "Comedian"},
  {quote: "Conversation would be vastly improved by the constant use of four simple words: I do not know.", 
   source: "Andre Maurois",
   profession: "Writer"},
  {quote: "A day without sunshine is like, you know, night.", 
   source: "Steve Martin",
   profession: "Comedian"},
  {quote: "I love deadlines. I like the whooshing sound they make as they fly by.", 
   source: "Douglas Adams", 
   profession: "Writer"},
  {quote: "There are lots of people who mistake their imagination for their memory", 
   source: "Josh Billings", 
   profession: "Comedian"},
  {quote: "A mind needs books just like a sword needs a whetstone.", 
   source: "Tyrion Lannister", 
   citation: "Game of Thrones", 
   year: 2011,
   profession: "half-man"},
  {quote: "You waste time trying to get people to love you, and you'll end up the most popular dead man in town.", 
   source: "Ser Bronn of the Blackwater", 
   citation: "Game of Thrones" , 
   year: 2012,
   profession: "Lord Commander of the City Watch"},
  {quote: "Yeah I called her up, she gave me a bunch of crap about me not listenin' to her enough, or somethin'. I don't know, I wasn't really payin' attention.", 
   source: "Harry", 
   citation: "Dumb and Dumber" , 
   year: 1994,
   profession: "Unemployed"},
  {quote: "Nobody calls me Lebowski. You got the wrong guy. I'm the Dude, man.", 
   source: "The Dude", 
   citation: "The Big Lebowski" , 
   year: 1998,
   profession: "Unemployed"},
  {quote: "Sixty percent of the time, it works every time.", 
   source: "Brian Fantana", 
   citation: "Anchorman" , 
   year: 2004,
   profession: "Weatherman"},
  {quote: "Hodor.",
   source: "Hodor",
   citation: "Game of Thrones",
   year: "Hodor",
   profession: "Hodor"
  },
  {quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
   source: "Marcus Aurelius",
   year: "A long time ago",
   profession: "Politician"
  },
  {quote: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
   source: "Sholom Aleichem"},
  {quote: "Does it disturb anyone else that 'The Los Angeles Angels' baseball team name translates directly to 'The The Angels Angels'?",
   source: "Neil DeGrasse Tyson",
   citation: "Reader's Digest Funny Quotes",
   profession: "Scientist"
  },
  {quote: "If con is the opposite of pro, then isn't Congress the opposite of progress?",
   source: "Jon Stewart",
   citation: "Reader's Digest Funny Quotes",
   profession: "Comedian"
  },
  {quote: "What are they planting to grow the seedless watermelon?",
   source: "Jerry Seinfeld",
   citation: "Reader's Digest Funny Quotes",
   profession: "Comedian"
  },
  {quote: "Children should be taught to question everything. To question everything they read, everything they hear. Children should be taught to question authority.",
   source: "George Carlin",
   citation: "It's Bad for Ya",
   year: 2008,
   profession: "Comedian"
  },
  {quote: "Learning without thought is labor lost; thought without learning is perilous.",
   source: "Confucius",
   year: "551-470 BCE",
   profession: "Philosopher"
  },
  {quote: "Problems that remain persistently insoluble should always be suspected as questions asked in the wrong way.",
   source: "Alan W. Watts",
   citation: "The Book on the Taboo Against Knowing Who You Are",
   year: 1989,
   profession: "Philosopher"
  },
  {quote: "A man who does not think for himself does not think at all.",
   source: "Oscar Wilde",
   citation: "The Soul of Man under Socialism",
   year: 1891,
   profession: "Author"
  },
  {quote: "Critical thinking is thinking about your thinking while you're thinking in order to make your thinking better.",
   source: "Richard W. Paul",
   citation: "How to Prepare Students for a Rapidly Changing World",
   year: 2012,
   profession: "Scholar"
  },
  {quote: "To repeat what others have said requires education; to challenge it requires brains.",
   source: "Mary Pettibone Poole",
   citation: "A Glass Eye at a Keyhole",
   year: 1938,
   profession: "Author"
  }
];

/**
 * Returns a random quote from quote collection
 * @param {array} quotes - array of quote objects
 */
function getRandomQuote(quotes) {
  // generate random number between 0 and the last index
  let selectionIndex = Math.floor(Math.random() * quotes.length);
  // select quote from quotes and return it
  return quotes[selectionIndex];
}

/**
 * Returns a random number to be used as a RGB value
 */
function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}

/**
 * Sets the background of the page to a random color
 */
function setRandomColor() {
  var red = getRandomRGB();
  var green = getRandomRGB();
  var blue = getRandomRGB();
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

/**
 * Renders the quote to the page
 */
function printQuote() {
  // get random quote
  let quote = getRandomQuote(quotes);
  let text = quote.quote;
  let author = quote.source;
  let profession = quote.profession;
  let citation = quote.citation;
  let year = quote.year;
  // create HTML string
  let HTMLString = `
    <p class="quote">${text}<p>
    <p class="source">${author}
  `
  // check for optional properties and add to HTMLString accordingly
  if (profession) {
    HTMLString += `
      <span class="profession">${profession}</span>
    `
  }
  if (citation) {
    HTMLString += `
      <span class="citation">${citation}</span>
    `
  }
  if (year) {
    HTMLString += `
      <span class="year">${year}</span>
    `
  }
  HTMLString += `</p>`
 
  // get quote-box div
  let quoteBox = document.getElementById("quote-box");
  // set innerHTML of the quote-box to the new HTML string
  quoteBox.innerHTML = HTMLString;
  // set body of page to random color
  setRandomColor();
}

// Refresh quote after every designated time interval
var intervalID = window.setInterval(printQuote, 20000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
