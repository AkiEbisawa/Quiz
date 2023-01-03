const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const MAX_HIGH_SCORES = 3;

finalScore.innerText = mostRecentScore;


