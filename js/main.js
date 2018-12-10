
const questions = [
   {
      question: 'Which of the following is not a Javascript datatype?',
      choices: {
         a: 'Strings',
         b: 'Alphanumeric',
         c: 'Boolean',
         d: 'Null'
      },
      correctChoice: 'b'
   },
   {
      question: 'We use different operators in Javascript.<br> Which of the following is means not equal to?',
      choices: {
         a: '===',
         b: '=/',
         c: '!',
         d: '!=='
      },
      correctChoice: 'd'
   },
   {
      question: 'Which operator is used to compare two values regardless of datatype?',
      choices: {
         a: '=',
         b: '===',
         c: '!=',
         d: '=='
      },
      correctChoice: 'd'
   },
   {
      question: 'What is the following code going to output?<br> let arr = [1, 2, 3, 4];<br>console.log(arr.length);',
      choices: {
         a: '3',
         b: 'undefined',
         c: '4',
         d: '0'
      },
      correctChoice: 'c'
   },
   {
      question: 'In cases where an else. . .if conditional statement becomes too long,<br> one may opt for _____ as an alternative.',
      choices: {
         a: 'for',
         b: 'while',
         c: 'switch',
         d: 'if. . .else'
      },
      correctChoice: 'c'
   },
   {
      question: 'Which one of the following is not a function declaration type',
      choices: {
         a: 'Function declaration',
         b: 'Arrow function',
         c: 'Function literal',
         d: 'Function expression'
      },
      correctChoice: 'c'
   }
];

const finalMessage = ['You are a pro at this.', 'You did well', 'You can always try again'];

const inputNames = [];

for (let i = 0; i < questions.length; i++) {
   inputNames.push(`q${i}`);
}

let index = -1;

// variable to store current question
let currentQuestion;

// variable to store the correct answer to the current question
let currentAnswer = [];
let rightChoice = [];

let score = 0;

// to store name for current question
let questionName;

function start() {

   $('header').slideUp(100);
   $('#bg-text').hide();

   index = index + 1;

   currentQuestion = questions[index];

   questionName = inputNames[index];
   
   // outputs first question
   $('.quizzer').html(
      `<p class="text-centre">${currentQuestion.question}</p>
      <label>
         <input type="radio" name="q${questionName}" value="a">${currentQuestion.choices.a}
      </label><br>
      <label>
         <input type="radio" name="q${questionName}" value="b">${currentQuestion.choices.b}
      </label><br>
      <label>
         <input type="radio" name="q${questionName}" value="c">${currentQuestion.choices.c}
      </label><br>
      <label>
         <input type="radio" name="q${questionName}" value="d">${currentQuestion.choices.d}
      </label><br>
      <input class="q-btn next-action" type="button" value="Next Question" onclick="nextQuestion()">`
   );

   currentAnswer.push(document.querySelector('input[name="q' + questionName +'"]:checked').value);
   rightChoice.push(currentQuestion.correctChoice);

}

function nextQuestion() {
   
   index++;
   
   currentQuestion = questions[index];

   questionName = inputNames[index];

   // outputs first question
   if (index < (questions.length - 1)) {
      $('.quizzer').html(
         `<p class="text-centre">${currentQuestion.question}</p>
         <div class="quiz-input">
         <label>
            <input type="radio" name="q${questionName}" value="a">${currentQuestion.choices.a}
         </label><br>
         <label>
            <input type="radio" name="q${questionName}" value="b">${currentQuestion.choices.b}
         </label><br>
         <label>
            <input type="radio" name="q${questionName}" value="c">${currentQuestion.choices.c}
         </label><br>
         <label>
            <input type="radio" name="q${questionName}" value="d">${currentQuestion.choices.d}
         </label><br>
         <input class="q-btn next-action" type="button" value="Next Question" onclick="nextQuestion()">
         </div>`
      );

      currentAnswer.push(document.querySelector('input[name="q' + questionName +'"]:checked').value);
      rightChoice.push(currentQuestion.correctChoice);

   } else {
      $('.quizzer').html(
         `<p class="text-centre">${currentQuestion.question}</p>
         <div class="quiz-input">
         <label>
            <input type="radio" name="q${questionName}" value="a">${currentQuestion.choices.a}
         </label><br>
         <label>
            <input type="radio" name="q${questionName}" value="b">${currentQuestion.choices.b}
         </label><br>
         <label>
            <input type="radio" name="q${questionName}" value="c">${currentQuestion.choices.c}
         </label><br>
         <label>
            <input type="radio" name="q${questionName}" value="d">${currentQuestion.choices.d}
         </label><br>
         <input class="q-btn next-action" type="button" value="Submit" onclick="myFunction()">
         </div>`
      );

      currentAnswer.push(document.querySelector('input[name="q' + questionName +'"]:checked').value);
      rightChoice.push(currentQuestion.correctChoice);
   
   }


   
};

function getUserChoice() {

   for (let j = 0; j < currentAnswer.length; j++) {
      if (currentAnswer[j] === rightChoice[j]) {
         score += 10;
      }
   }

};

function printResult() {

   if (score === 100) {
      $('.quizzer').html(
         `<h1>${finalMessage[0]}</h1>
         <p>You scored <span>${score}</span>`
      );
   } else if (score >= 80 && score < 100) {
      $('.quizzer').html(
         `<h1>${finalMessage[1]}</h1>
         <p>You scored <span>${score}</span>`
      );
   } else {
      $('.quizzer').html(
         `<h1>${finalMessage[2]}</h1>
         <p>You scored <span>${score}</span>`
      );
   }

}

function myFunction() {
   printResult();
   getUserChoice();

   // $('.quizzer').html(
   //    `<h1>${currentAnswer[2]}</h1>
   //    <p>You scored <span>${score}</span>`
   // );
}