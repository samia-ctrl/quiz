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
      { text: "8", correct: true },
      { text: "4", correct: false },
      { text: "16", correct: false },
      { text: "2", correct: false },
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
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  displayQuestion.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    let button = document.querySelector(".btn");
    button.innerHTML = answer.text;
    displayAnswer.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(event) {
  let clickBtn = event.target;
  let correctAnswer = clickBtn.dataset.correct === "true";
  if (correctAnswer) {
    clickBtn.classList.add("correct");
  } else {
    clickBtn.classList.add("incorrect");
  }
}

startQuiz();
