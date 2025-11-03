const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Iron", "Hydrogen"],
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
  },
];

let currentQuestionIndex = 0;

const quizTitle = document.querySelector(".quiz-title");
const quizForm = document.getElementById("quizForm");
const questionListItems = document.querySelectorAll(".question-list li");

function renderQuestion(index) {
  const data = quizData[index];
  quizTitle.textContent = data.question;

  const optionsHTML = data.options
    .map((option, i) => {
      const letter = String.fromCharCode(65 + i);
      return `
        <label class="quiz-option">
          <input type="radio" name="answer" value="${letter}" />
          <span>${letter}. ${option}</span>
        </label>
      `;
    })
    .join("");

  quizForm.innerHTML =
    optionsHTML +
    `
    <button type="submit" class="submit-button">Submit Answer</button>
  `;

  questionListItems.forEach((li, i) => {
    li.classList.toggle("active", i === index);
  });
}

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const selected = quizForm.querySelector('input[name="answer"]:checked');
  if (!selected) return;

  questionListItems[currentQuestionIndex].classList.add("answered");

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    renderQuestion(currentQuestionIndex);
  } else {
    quizTitle.textContent = "Quiz Completed 🎉";
    quizForm.innerHTML = "<p>Thank you for participating!</p>";
  }
});

let timeLeft = 180;
const timerValue = document.querySelector(".timer-value");

function startTimer() {
  const countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerValue.textContent = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;

    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countdown);
      timerValue.textContent = "Time's up!";
      timerValue.style.color = "#d32f2f";
    }
  }, 1000);
}

startTimer();

renderQuestion(currentQuestionIndex);
