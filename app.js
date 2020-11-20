const store = {
  questions: [
    {//q1//
      question: 'In what year did Norway gain independence from Sweden?',
      answers: [
        '1948',
        '1905',
        '1865',
        '1654'
      ],
      correctAnswer: '1905'
    },
    {//q2//
      question: "What is the date of Norway's Independence day?",
      answers: [
        'November 3rd',
        'July 4th',
        'May 17th',
        'December 25th'
      ],
      correctAnswer: 'May 17th'
    },
    {//q3//
      question: 'How many counties are there in Norway?',
      answers: [
        '5',
        '11',
        '18',
        '26'
      ],
      correctAnswer: '11'
    },
    {//q4//
      question: 'What is the population of Norway?',
      answers:  [
        '5 million',
        '7 million',
        '18 million',
        '90 million'
      ],
      correctAnswer: '5 million'
    },
    {//q5//
      question: 'What is the most populous city in Norway?',
      answers:  [
        'Bergen',
        'Trondheim',
        'Oslo',
        'Stavanger'
      ],
      correctAnswer: 'Oslo'
    },
    {//q6//
      question: 'How many political parties currently hold seats in Norwegian parliament?',
      answers:  [
        '2',
        '5',
        '9',
        '18'
      ],
      correctAnswer: '9'
    },
    {//q7//
      question: 'What is considered Norway’s national dish?',
      answers:  [
        'Fiskesuppe (fish soup)',
        'Tacoer (tacos)',
        'Fårikål (cabbage and lamb stew)',
        'Kjøttkaker og potetmos (meatballs and mashed potatoes)'
      ],
      correctAnswer: 'Fårikål (cabbage and lamb stew)'
    },
    {//q8//
      question: 'Who are the crown prince and princess of Norway?',
      answers:  [
        'Prince Frederik and Princess Mary',
        'Prince Haakon and Princess Mette Marit',
        'Prince George and Princess Charlotte',
        'Prince Carl and Princess Sofia'
      ],
      correctAnswer: 'Prince Haakon and Princess Mette Marit'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
// this function will return the current question number to be inserted into the html and the store object//

//This function will provide the text for the welcome page//
function generateWelcomePage(){
  return `  
  <div class="container">
    <header>
      <h1 class="box">How much do you know about Norway?</h1>
    </header>
    <main>
      <div class="container">
        <h2 class="box">Take this quiz to prove your knowledge!</h2>
      <div class="no-border-box">
      <button id="begin">Begin</button>
      </div>
    </div>
  </div>
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.js" crossorigin="anonymous"></script>
  <script src="app.js"></script>`
}

//this function will generate the text for the current question and the current answer choices, as well as the current question number and score//
function generateQuestionAndAnswers(){
  const number = store.questionNumber - 1
  const questionText = store.questions[number].question

  return `
  <div class="container">
  <ul class="box li-box">
    <li id="question-number"><b>Question: ${store.questionNumber}/${store.questions.length}</b></li>
    <li id="score"><b>Number Correct: ${store.score}/${store.questions.length}</b></li>
  </ul>
  <div class="container">
  <div id="js-form" class="box">
    <form>
      <h2>${questionText}</h2><br>
        <input name="answer" type="radio" value="${store.questions[number].answers[0]}">
         <label for="${store.questions[number].answers[0]}">${store.questions[number].answers[0]}</label><br>
        <input name="answer" type="radio" value="${store.questions[number].answers[1]}">
         <label for="${store.questions[number].answers[1]}">${store.questions[number].answers[1]}</label><br>
        <input name="answer" type="radio" value="${store.questions[number].answers[2]}">
         <label for="${store.questions[number].answers[2]}">${store.questions[number].answers[2]}</label><br>
        <input name="answer" type="radio" value="${store.questions[number].answers[3]}">
         <label for="${store.questions[number].answers[3]}">${store.questions[number].answers[3]}</label><br>
         <div id="js-answer-response"></div>
    </form>
  </div>
  <div class="no-border-box">
    <form id="js-submit-button">
      <button id="js-submit-answer">Submit</button>
    </form>
    <form id="js-next-button">
      <button id="js-next-question">Next</button>
    <form>
  </div>
</div>
</div>
</div> `
}

//this function generates the html for the results page//
function generateResultsPage() {
  if (store.score >= 6){
  return `  
  <div class="container">
    <div class="box">
     <h2>Congratulations!</h2>
    </div>
    <div class="box">
      <h2>You got ${store.score}/${store.questions.length} questions correct!</h2>
      <h3>Retake the quiz to show your smarts again!</h3>
   </div>
  <div class="no-border-box">
  <button id="retake-quiz">Retake Quiz</button>
</div>`}
  if (store.score <= 5){
    return `  
  <div class="container">
    <div class="box">
     <h2>Good job!</h2>
    </div>
    <div class="box">
      <h2>You got ${store.score}/${store.questions.length} questions correct.</h2>
      <h3>Retake the quiz to boost your score!</h3>
   </div>
  <div class="no-border-box">
  <button id="retake-quiz">Retake Quiz</button>
</div>`
  }
}

//this function will hide the next button so only the submit button is visible//
function hideNextButton() {
  $("#js-next-question").hide();
  $("#js-submit-answer").show();
} 
//this function will hide the submit button so only the next button is visible//
function showNextButton() {
   $("#js-next-question").show()
   $("#js-submit-answer").hide()
 }  

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <body> or <main> tags based on the state of the store
function renderQuiz() {
if(store.quizStarted===false) {
    $('body').html(generateWelcomePage())
    store.quizStarted = true
  }
  else if (store.questionNumber >= 0 && store.questionNumber < store.questions.length){
    store.questionNumber = store.questionNumber+1
    // currentQuestionNumber()
    $('main').html(generateQuestionAndAnswers())
    hideNextButton()
  }
  else {
    $('main').html(generateResultsPage())
  }
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//This function will generate the first question and answer when the begin button is clicked on the welcome page//
function beginClicked() {
$('body').on('click', '#begin', function(event) {
  renderQuiz()
  });
}

//This will generate the boxes that tell the user if their answer is correct or not when the submit button is clicked and will prompt for an answer if none is chosen//
function answerSubmitted() {
    $('body').on('submit', 'form', function (event) {
      event.preventDefault();
      let selectedAnswer = $("input[type=radio]:checked").val()
      let number = store.questionNumber - 1
      let correctAnswer = store.questions[number].correctAnswer
      let correctResponse = `<p class='correct-answer'>That is correct!</p>`
      let incorrectResponse = `<p class='incorrect-answer'>Oops! The correct answer is: ${store.questions[number].correctAnswer}`
      if (selectedAnswer === undefined){
        $('#js-answer-response').html(`<p class="incorrect-answer">Please select an answer.</p>`)
        hideNextButton()
      }
      else if (selectedAnswer === correctAnswer) {
        store.score += 1;
        $('#js-answer-response').html(correctResponse)
        showNextButton()
      }
      else {
        $('#js-answer-response').html(incorrectResponse)
        showNextButton()
      }
    });
}

 //this function will prompt the next question and answer set to load//
  function nextQuestionClicked(){
$('body').on('click', '#js-next-question', function(event){
  event.preventDefault()
  renderQuiz()
  });
}
//when the user clicks the retake button, this function will take the user back to the beginning of the quiz//
function retakeQuiz(){
  $('div').on('click', '#retake-quiz', function(event) {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    renderQuiz()
  });
}

// this function will call all the other functions to display the quiz as it currently stands//
function runQuiz() {
  renderQuiz()
  beginClicked()
  answerSubmitted()
  nextQuestionClicked()
  retakeQuiz()
}

$(runQuiz())