let score, questionIndex, activeQuestions;

//Hämta id från html
const ScoreCounter = document.querySelector(".score span");
const main = document.getElementById('main')
const startPage = document.getElementById('startPage')
const webbQuizBtn = document.getElementById('webbQuizBtn')
const geoQuizBtn = document.getElementById('geoQuizBtn')
const sportQuizBtn = document.getElementById('sportQuizBtn')

//Frågor och svar
const webDevelopmentQuiz = 
[{ 
    text: "Vilket språk används för att styla webbsidor?", 
    options: ["HTML", "CSS", "JavaScript"], 
    correct: 1},
  {
    text: "Vilket av följande är ett ramverk för JavaScript?", 
    options: ["React", "PHP", "Python"], 
    correct: 0
  },
  { text: "Vilket attribut i HTML används för att länka en extern CSS-fil?", 
    options: ["<script>", "<link>", "<style>"], 
    correct: 1
  },
  {
    text: "Vilken HTML-tagg används för att skapa en ordnad lista?", 
    options: ["<ol>", "<ul>", "<li>"], 
    correct: 0
  },
  {
    text: "Vilket av följande är inte ett programmeringsspråk?", 
    options: ["Java", "C++", "HTML"], 
    correct: 2
  }]

const geografi = 
[{
    text: "Vilket är världens största land till ytan?", 
    options: ["Kanada", "Kina", "Ryssland"], 
    correct: 2
  },
  {
    text: "Vilken flod rinner genom Egypten?", 
    options: ["Nilen", "Amazonas", "Mississippifloden"], 
    correct: 0
  },
  {
    text: "Vilken är Europas högsta bergstopp?", 
    options: ["Matterhorn", "Mont Blanc", "Elbrus"], 
    correct: 1
  },
  {
    text: "Vilket land har störst befolkning i världen?", 
    options: ["Indien", "Kina", "USA"], 
    correct: 0
  },
  {
    text: "Vilken ö är världens största?", 
    options: ["Madagaskar", "Nya Guinea", "Grönland"], 
    correct: 2
  }]

  const sport = 
[{
    text: "Vilket land vann VM 2018?", 
    options: ["Tyskland", "Frankrike", "Brasilien"], 
    correct: 1
  },
  {
    text: "Hur många spelare i ett fotbollslag?", 
    options: ["9", "11", "13"], 
    correct: 1
  },
  {
    text: "Vilken sport spelas med racket och boll på gräs?", 
    options: ["Tennis", "Baseboll", "Cricket"], 
    correct: 0
  },
  {
    text: "Vilken sport är Zlatan känd för?", 
    options: ["Basket", "Hockey", "Fotboll"], 
    correct: 2
  },
  {
    text: "Hur lång är en maraton?", 
    options: ["42 km", "21 km", "10 km"], 
    correct: 0
  }]


function updateScoreDisplay() {
  ScoreCounter.textContent = score;
}

//starta quizet
webbQuizBtn.addEventListener('click', (e) => {
  showWebQuiz()
  startPage.style.display = "none"
})

geoQuizBtn.addEventListener('click', (e) => {
  showGeoQuiz()
  startPage.style.display = "none"
})

sportQuizBtn.addEventListener('click', (e) => {
  showSportQuiz()
  startPage.style.display = "none"
})

//Webbutveckling
let currentQuestionIndex = 0;

function showWebQuiz() {
  const webbQuizPage = document.createElement('div')
  webbQuizPage.id = "webbQuiz"

  const questionObj = webDevelopmentQuiz[currentQuestionIndex];

  // //Skapar frågan
  const webbQuestion = document.createElement('h2')
  webbQuestion.innerHTML = questionObj.text
  webbQuestion.id = "webbQuestion"

  // //Skapar svar
  const webbAnswers = document.createElement('ul')
  webbAnswers.id = "webbAnswers";
  const opt1 = document.createElement('li')
  const opt2 = document.createElement('li')
  const opt3 = document.createElement('li')

  opt1.textContent = questionObj.options[0];
  opt2.textContent = questionObj.options[1];
  opt3.textContent = questionObj.options[2];

  // //Skickar upp
  main.appendChild(webbQuizPage)
  webbQuizPage.appendChild(webbQuestion)
  webbQuizPage.appendChild(webbAnswers)
  webbAnswers.appendChild(opt1)
  webbAnswers.appendChild(opt2)
  webbAnswers.appendChild(opt3)

}




