window.onload = function() {
 const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Who is the current President of the United States?",
    options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Washington"],
    answer: "Joe Biden"
  },
  {
  question: "Which gas is commonly known as laughing gas?",
  options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Nitrous oxide"],
  answer: "Nitrous oxide"
},
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "Au"
  },{
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Madrid"],
      answer: "Paris"
  },
  {
      question: "What is the square root of 64?",
      options: ["4", "8", "16", "10"],
      answer: "8"
  },
  {
      question: "Solve the equation: 3x + 7 = 22",
      options: ["3", "5", "6", "8"],
      answer: "5"
  },
  {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
  },
  {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["Japan", "China", "South Korea", "Vietnam"],
      answer: "Japan"
  },
  {
      question: "What is the unit of measurement for force?",
      options: ["Newton", "Watt", "Volt", "Ohm"],
      answer: "Newton"
  },
  {
      question: "Which scientist discovered the theory of relativity?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
      answer: "Albert Einstein"
  },
  {
      question: "What is the atomic number of oxygen?",
      options: ["8", "16", "4", "12"],
      answer: "8"
  },
  {
      question: "Which element is represented by the symbol 'H' in the periodic table?",
      options: ["Hydrogen", "Helium", "Hassium", "Hafnium"],
      answer: "Hydrogen"
  },
  {
      question: "What is the law of supply and demand?",
      options: ["The price of a product increases as demand increases", "The price of a product decreases as demand increases", "The price of a product increases as supply increases", "The price of a product decreases as supply decreases"],
      answer: "The price of a product increases as demand increases"
  },
  {
      question: "What is inflation?",
      options: ["A decrease in the general price level of goods and services", "An increase in the general price level of goods and services", "A decrease in the money supply", "An increase in the money supply"],
      answer: "An increase in the general price level of goods and services"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra"
  },
  {
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
    answer: "Alexander Graham Bell"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Mercury", "Neptune"],
    answer: "Mars"
  },
  {
    question: "Who is the author of the Harry Potter book series?",
    options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "Dan Brown"],
    answer: "J.K. Rowling"
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Makalu", "Kangchenjunga"],
    answer: "Mount Everest"
  },
  {
    question: "Which country is famous for the Taj Mahal?",
    options: ["India", "China", "Egypt", "Mexico"],
    answer: "India"
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answer: "Jupiter"
  },
  {
    question: "Which country is known for producing the most coffee in the world?",
    options: ["Brazil", "Colombia", "Ethiopia", "Vietnam"],
    answer: "Brazil"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the square root of 16?",
    options: ["2", "4", "8", "16"],
    answer: "4"
  },
  {
    question: "Which country has the largest population in the world?",
    options: ["China", "India", "United States", "Russia"],
    answer: "China"
  },
  {
    question: "What is the formula for calculating compound interest?",
    options: ["P = A / (1 + r)^n", "P = A * (1 + r)^n", "P = A + r^n", "P = A - r^n"],
    answer: "P = A * (1 + r)^n"
  }
  // Add more questions here...
];

  class Quiz {
    constructor(quizData) {
      this.quizData = quizData;
      this.currentQuestion = 0;
      this.score = 0;
      this.questionsOrder = this.shuffleQuestions();

      this.questionElement = document.getElementById("question");
      this.optionsElement = document.getElementById("options");
      this.previousButton = document.getElementById("previous");
      this.nextButton = document.getElementById("next");
      this.submitButton = document.getElementById("submit");
      this.resetButton = document.getElementById("reset");

      this.displayQuestion();
      this.attachEventListeners();
    }

    shuffleQuestions() {
      const shuffledQuestions = [...this.quizData];
      for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
      }
      return shuffledQuestions;
    }

    displayQuestion() {
      const currentQuizData = this.questionsOrder[this.currentQuestion];
      const questionNumber = this.currentQuestion + 1;

      this.questionElement.innerText = `${questionNumber}. ${currentQuizData.question}`;
      this.optionsElement.innerHTML = "";

      currentQuizData.options.forEach((option) => {
        const li = document.createElement("li");
        const input = document.createElement("input");

        input.type = "radio";
        input.name = `option-${questionNumber}`;
        input.value = option;

        li.appendChild(input);
        li.append(option);
        this.optionsElement.appendChild(li);

        input.addEventListener("change", this.selectOption.bind(this));
      });
    }

    selectOption(e) {
      const selectedOption = e.target;
      const currentQuizData = this.questionsOrder[this.currentQuestion];

      if (selectedOption.value === currentQuizData.answer) {
        this.score++;
      }
    }

    attachEventListeners() {
      this.previousButton.addEventListener("click", () => {
        if (this.currentQuestion > 0) {
          this.currentQuestion--;
          this.displayQuestion();
        }
      });

      this.nextButton.addEventListener("click", () => {
        if (this.currentQuestion < this.questionsOrder.length - 1) {
          this.currentQuestion++;
          this.displayQuestion();
        }
      });

      this.submitButton.addEventListener("click", () => {
        this.showScore();
      });

      this.resetButton.addEventListener("click", () => {
        this.resetQuiz();
      });
    }

showScore() {
    this.disableNavigationButtons();

    const totalQuestions = this.questionsOrder.length;
    const scorePercentage = Math.round((this.score / totalQuestions) * 100);
    const incorrectAnswersElement = document.getElementById("incorrect-answers");
    incorrectAnswersElement.innerHTML = "";

    this.questionsOrder.forEach((quizData, index) => {
        const selectedOption = document.querySelector(`input[name=option-${index + 1}]:checked`);
        if (selectedOption && selectedOption.value !== quizData.answer) {
            const li = document.createElement("li");
            li.innerHTML = `
            <strong>Question ${index + 1}:</strong> 
            Your Answer: ${selectedOption.value}, 
            Correct Answer: ${quizData.answer}
          `;
            incorrectAnswersElement.appendChild(li);
        }
    });

    this.questionElement.innerText = `You scored ${this.score}/${totalQuestions} (${scorePercentage}%)`;
    this.optionsElement.innerHTML = "";

    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "block";

    //this.showAdvertisement();
}

resetQuiz() {
    this.currentQuestion = 0;
    this.score = 0;
    this.questionsOrder = this.shuffleQuestions();
    this.displayQuestion();
    this.enableNavigationButtons();

    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "none";
}

    enableNavigationButtons() {
      this.previousButton.disabled = false;
      this.nextButton.disabled = false;
      this.submitButton.disabled = false;
    }

    disableNavigationButtons() {
      this.previousButton.disabled = true;
      this.nextButton.disabled = true;
      this.submitButton.disabled = true;
    }

    showScore() {
      this.disableNavigationButtons();

      const totalQuestions = this.questionsOrder.length;
      const scorePercentage = Math.round((this.score / totalQuestions) * 100);

      this.questionElement.innerText = `You scored ${this.score}/${totalQuestions} (${scorePercentage}%)`;
      this.optionsElement.innerHTML = "";

      //this.showAdvertisement();
    }

    showAdvertisement() {
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");

      const advertisement = document.createElement("div");
      advertisement.classList.add("advertisement");
      advertisement.innerHTML = `
        <h3>Check My Site!</h3>
        <p>Check my personal website</p>
        <p>Click <a href="https://syipmong.github.io/yipmong/#">here</a> to View it! and you can leave a suggestion or your thoughts through any of my social profiles</p>
        <button id="close-advertisement">Close</button>
      `;

      //overlay.appendChild(advertisement);
      //document.body.appendChild(overlay);

      const closeButton = document.getElementById("close-advertisement");
      closeButton.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });
    }
  }

  const quiz = new Quiz(quizData);
};
