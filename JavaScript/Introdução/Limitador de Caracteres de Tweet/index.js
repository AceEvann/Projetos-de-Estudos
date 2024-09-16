// 1
var tweet = prompt("Escreva seu tweet: ");

// Use .length para contar os caracteres do tweet
var contagemDeTweets = tweet.length;

// Mostra quantos caracteres foram escritos, depois subtraia o limite deles
alert("Você escreveu " + contagemDeTweets + " caracteres, você tem " + 
    (140 - contagemDeTweets) + " caracteres sobrando.");

/////////////////////////////////////////////////////////////////////////////

// 2
var tweet = prompt("Escreva seu tweet: ");

// Use .slice para limitar quantos tweets serão exibidos
alert(tweet.slice(0,141));
