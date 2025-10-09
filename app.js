
  let score = 0;

//Hämta id från html
const ScoreCounter = document.querySelector("#score span");
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
    correct: 1
  },
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
    correct: "Ryssland"
  },
  {
    text: "Vilken flod rinner genom Egypten?", 
    options: ["Nilen", "Amazonas", "Mississippifloden"], 
    correct: "Nilen"
  },
  {
    text: "Vilken är Europas högsta bergstopp?", 
    options: ["Matterhorn", "Mont Blanc", "Elbrus"], 
    correct: "Mont Blanc"
  },
  {
    text: "Vilket land har störst befolkning i världen?", 
    options: ["Indien", "Kina", "USA"], 
    correct: "Indien"
  },
  {
    text: "Vilken ö är världens största?", 
    options: ["Madagaskar", "Nya Guinea", "Grönland"], 
    correct: "Grönland"
  }]

  const sport = 
[{
    text: "Vilket land vann VM 2018?", 
    options: ["Tyskland", "Frankrike", "Brasilien"], 
    correct: "Frankrike"
  },
  {
    text: "Hur många spelare i ett fotbollslag?", 
    options: ["9", "11", "13"], 
    correct: "11"
  },
  {
    text: "Vilken sport spelas med racket och boll på gräs?", 
    options: ["Tennis", "Baseboll", "Cricket"], 
    correct: "Tennis"
  },
  {
    text: "Vilken sport är Zlatan känd för?", 
    options: ["Basket", "Hockey", "Fotboll"], 
    correct: "Fotboll"
  },
  {
    text: "Hur lång är en maraton?", 
    options: ["42 km", "21 km", "10 km"], 
    correct: "42 km"
  }]


function updateScoreDisplay() {
  ScoreCounter.textContent = score;
}

//starta quizet
webbQuizBtn.addEventListener('click', () => {
  showWebbQuiz()
  startPage.style.display = "none"
})

geoQuizBtn.addEventListener('click', () => {
  showGeoQuiz()
  startPage.style.display = "none"
})

sportQuizBtn.addEventListener('click', () => {
  showSportQuiz()
  startPage.style.display = "none"
})

let currentQuestionIndex = 0;


//Skapar funktioner för alla ämnen
function showWebbQuiz() {
  const webbQuizPage = document.createElement('div')
  webbQuizPage.id = "webbQuizPage"
  main.appendChild(webbQuizPage)

  showQuestions(webDevelopmentQuiz, webbQuizPage);
}

function showGeoQuiz() {
  const geoQuizPage = document.createElement('div')
  geoQuizPage.id = "geoQuizPage"
  main.appendChild(geoQuizPage)

  showQuestions(geografi, geoQuizPage);
}

function showSportQuiz() {
  const sportQuizPage = document.createElement('div')
  sportQuizPage.id = "sportQuizPage"
  main.appendChild(sportQuizPage)
  showQuestions(sport, sportQuizPage);
}


//Gör så att frågor och svar dycker upp
function showQuestions(whichQuiz, whichPage){
  const questionObj = whichQuiz[currentQuestionIndex];

  const questionHeading = document.createElement('h2')
  questionHeading.innerHTML = questionObj.text

  const answersUl = document.createElement('ul')
  questionObj.options.forEach((opt, i) => {
    const li = document.createElement('li')
    li.textContent = opt
    li.addEventListener('click', () =>{
      if(i === questionObj.correct){
        score++;
      }
      updateScoreDisplay();
      currentQuestionIndex++;
      showQuestions(whichQuiz, whichPage)
      console.log(score)
    })
    answersUl.appendChild(li)
  })

  if(currentQuestionIndex > 4){
    whichPage.style.display = "none"

    const finishedPage = document.createElement('div')
    finishedPage.id = 'finishedPage'

    const finishedHeader = document.createElement('h2')

    if(score === 5){
      finishedHeader.innerHTML = "Du fick alla rätt!"
    } else if(score >= 3){
      finishedHeader.innerHTML = "Du klarade det!"
    }else{
      finishedHeader.innerHTML = "Du förlora"
    }
  }

  whichPage.appendChild(questionHeading)
  whichPage.appendChild(answersUl)
}
