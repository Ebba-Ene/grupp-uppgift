let score, questionIndex, activeQuestions;

//Hämta id från html
const ScoreCounter = document.querySelector(".score span");
const main = document.getElementById('main')
const startPage = document.getElementById('startPage')
const startBtn = document.getElementById('startBtn')


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

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function updateScoreDisplay() {
  ScoreCounter.textContent = score;
}

//starta quizet
startBtn.addEventListener('click', (e) => {
  categoryPicker()
  startPage.style.display = "none"
})

function categoryPicker() {
  //Skapa diven för att välja ämne
  const categoryPicker = document.createElement('div')
  categoryPicker.id = "categoryPicker"

  //Skapar innehållet i diven
  const catHeading = document.createElement('h2')
  catHeading.innerHTML = "Vilket ämne?"

  const catWebBtn = document.createElement('button')
  catWebBtn.id = "catWebBtn"
  catWebBtn.innerHTML = "Webbutveckling"

  const catGeoBtn = document.createElement('button')
  catGeoBtn.id = "catGeoBtn"
  catGeoBtn.innerHTML = "Geografi"

  const catSportBtn = document.createElement('button')
  catSportBtn.id = "catSportBtn"
  catSportBtn.innerHTML = "Sport"

  //Skicka till webbsidan
  main.appendChild(categoryPicker)
  categoryPicker.appendChild(catHeading)
  categoryPicker.appendChild(catWebBtn)
  categoryPicker.appendChild(catGeoBtn)
  categoryPicker.appendChild(catSportBtn)

  //Webbutveckling
  let currentQuestionIndex = 0;

  function showWebQuiz() {

    const questionObj = webDevelopmentQuiz[currentQuestionIndex];
    document.getElementById('catHeading').textContent = questionObj.text;
    // const webbQuiz = document.createElement('div')
    // webbQuiz.id = "webbQuiz"

    // //Skapar frågan
    // const webbQuestion = document.createElement('h2')
    // webbQuestion.innerHTML = "Loading..."
    // webbQuestion.id = "webbQuestion"

    // //Skapar svar
    // const webbAnswers = document.createElement('ul')
    // webbAnswers.id = "answers";
    // const opt1 = document.createElement('li')
    // const opt2 = document.createElement('li')
    // const opt3 = document.createElement('li')

    // //Skickar upp
    // main.appendChild(webbQuiz)
    // webbQuiz.appendChild(webbQuestion)
    // webbQuiz.appendChild(webbAnswers)
    // webbAnswers.appendChild(opt1)
    // webbAnswers.appendChild(opt2)
    // webbAnswers.appendChild(opt3)

  }
}
  catWebBtn.addEventListener('click', (e) => {
    showWebQuiz();
    e.target.parentElement.style.display = "none";
  })



