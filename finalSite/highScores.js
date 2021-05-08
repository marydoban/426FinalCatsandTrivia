/*
// const highScoresList = document.querySelector("#highScoresList")
// const highScores = JSON.parse(localStorage.getItem('highScores')) || []
// highScoresList.innerHtml = 
// highScores.map(score => {
//     return '<li class = "high-score"> ${score.name} - {score.score}</li>'
// }).join(" ")*/
let quote = ""
const num = Math.floor(Math.random() * 1000);
const finalScore = document.querySelector("#finalScore")
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  

  .then(function(data) {
    console.log(data[num].text);
    let quote = data[num].text;
    finalScore.innerText = quote
    
  });
  


    // const settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&size=medium&maxR=1&t=Wisdom",
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": "97570cb704mshb66709b67f0718bp117926jsn2847dee4eeb6",
    //         "x-rapidapi-host": "healthruwords.p.rapidapi.com"
    //     }
    // };
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });


