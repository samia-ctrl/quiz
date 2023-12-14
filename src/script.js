let questions = [
  {
    question: "What is the square root of 16?",
    answers: [
      { text: "8", correct: false },
      { text: "4", correct: true },
      { text: "16", correct: false },
      { text: "2", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "2", correct: false },
      { text: "8", correct: true },
      { text: "16", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "What is 7²?",
    answers: [
      { text: "14", correct: false },
      { text: "42", correct: false },
      { text: "52", correct: false },
      { text: "49", correct: true },
    ],
  },
  {
    question: "What is 9²?",
    answers: [
      { text: "99", correct: false },
      { text: "90", correct: false },
      { text: "18", correct: false },
      { text: "81", correct: true },
    ],
  },

  {
    question: "What is 10²?",
    answers: [
      { text: "20", correct: false },
      { text: "100", correct: true },
      { text: "1000", correct: false },
      { text: "1", correct: false },
    ],
  },
];
let displayQuestion = document.getElementById("question");
let displayAnswer = document.getElementById("answer-buttons");
let displayNext = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  displayNext.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  console.log(questions[0]);
  let questionNumber = currentQuestionIndex + 1;
  displayQuestion.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    displayAnswer.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  displayNext.style.display = "none";
  while (displayAnswer.firstChild) {
    displayAnswer.removeChild(displayAnswer.firstChild);
  }
}
function selectAnswer(event) {
  let clickBtn = event.target;
  let correctAnswer = clickBtn.dataset.correct === "true";
  if (correctAnswer) {
    clickBtn.classList.add("correct");
    score++;
  } else {
    clickBtn.classList.add("incorrect");
  }
  Array.from(displayAnswer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  displayNext.style.display = "block";
}

function showScore() {
  resetState();
  displayQuestion.innerHTML = `You scored ${score} out of ${questions.length}!`;
  displayNext.innerHTML = "Play Again";
  displayNext.style.display = "block";
  displayNext.style.width = "50%";
}

function moveNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
displayNext.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    moveNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
