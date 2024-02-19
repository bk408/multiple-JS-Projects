
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is 5 + 3?",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Charles Dickens"],
    answer: "Harper Lee",
  },
];


const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const resultElement = document.querySelector(".result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;

    optionsElement.innerHTML = '';


    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;

        button.addEventListener('click', () => {
            checkAnswer(option)
        })
        optionsElement.appendChild(button)
    })
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];
  if (answer === currentQuizData.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
}
