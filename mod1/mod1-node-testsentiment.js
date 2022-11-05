var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.log(result);
// Score: -2, Comparative: -0.666
