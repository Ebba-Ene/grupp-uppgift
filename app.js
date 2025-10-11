
let score = 0

//Hämta id från html
const ScoreCounter = document.querySelector("#scoreBar span")
const scoreBar = document.getElementById('scoreBar')
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

const geografiQuiz = 
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

  const sportQuiz = 
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

scoreBar.style.display = "none"

function updateScoreDisplay() {
  ScoreCounter.textContent = score;
}

//starta quizet
webbQuizBtn.addEventListener('click', () => {
  showWebbQuiz()
  startPage.style.display = "none"
  scoreBar.style.display = "block"
})

geoQuizBtn.addEventListener('click', () => {
  showGeoQuiz()
  startPage.style.display = "none"
  scoreBar.style.display = "block"

})

sportQuizBtn.addEventListener('click', () => {
  showSportQuiz()
  startPage.style.display = "none"
  scoreBar.style.display = "block"

})

let currentQuestionIndex = 0

//Skapar funktioner för alla ämnen
function showWebbQuiz() {
  const webbQuizPage = document.createElement('div')
  webbQuizPage.id = "webQuizPage"
  main.appendChild(webbQuizPage)

  showQuestions(webDevelopmentQuiz, webbQuizPage);
}

function showGeoQuiz() {
  const geoQuizPage = document.createElement('div')
  geoQuizPage.id = "geoQuizPage"
  main.appendChild(geoQuizPage)

  showQuestions(geografiQuiz, geoQuizPage);
}

function showSportQuiz() {
  const sportQuizPage = document.createElement('div')
  sportQuizPage.id = "sportQuizPage"
  main.appendChild(sportQuizPage)
  showQuestions(sportQuiz, sportQuizPage);
}

//Gör så att frågor och svar dyker upp
function showQuestions(whichQuiz, whichPage){
   if(currentQuestionIndex > 4){
    whichPage.style.display = "none"

    const finishedPage = document.createElement('div')
    finishedPage.id = 'finishedPage'

    const finishedHeader = document.createElement('h2')
    finishedHeader.className = "centered-box"

    if (score === 5){
      finishedHeader.innerHTML = "Du fick alla rätt!"
    } else if (score >= 3){
      finishedHeader.innerHTML = "Du klarade det!"
    } else {
      finishedHeader.innerHTML = "Du förlorade men försök gärna igen!"
    }

    console.log(finishedHeader)

    main.appendChild(finishedPage)
    finishedPage.appendChild(finishedHeader)

    const playAgainBtn = document.createElement('button')
    playAgainBtn.innerHTML = "Spela igen"

    finishedPage.appendChild(playAgainBtn)

    playAgainBtn.addEventListener('click', () => {
      finishedPage.style.display = "none"
      startPage.style.display = "block"

      score = 0
      updateScoreDisplay()
      currentQuestionIndex = 0
    })
    return

  }

  const questionObj = whichQuiz[currentQuestionIndex]

  const questionHeading = document.createElement('h2')
  questionHeading.className = "question centered-box"
  questionHeading.innerHTML = questionObj.text

  const answersUl = document.createElement('ul')
  answersUl.className = "answers"

  questionObj.options.forEach((opt, i) => {
    const li = document.createElement('li')
    li.textContent = opt
    li.addEventListener('click', () =>{
      if(i === questionObj.correct){
        score++;
      }
      updateScoreDisplay()
      currentQuestionIndex++
      whichPage.innerHTML = ""
      showQuestions(whichQuiz, whichPage)
    })
    answersUl.appendChild(li)
  })

  whichPage.appendChild(questionHeading)
  whichPage.appendChild(answersUl)
}