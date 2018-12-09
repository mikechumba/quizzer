
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
      correctChoice: 'a'
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
      correctChoice: 'a'
   }
];

const finalMessage = ['You are a pro at this.', 'You did well', 'You can always try again'];

let index = -1;

// variable to store current question
let currentQuestion;

// variable to store the correct answer to the current question
let currentAnswer;

let score;

function start() {

   $('header').slideUp(100);
   $('#bg-text').hide();

   index = index + 1;

   currentQuestion = questions[index];

   currentAnswer = currentQuestion.choices.correctChoice
   
   // outputs first question
   $('.quizzer').html(
      `<p class="text-centre">${currentQuestion.question}</p>
      <label>
         <input type="radio" name="choice" value="a">${currentQuestion.choices.a}
      </label><br>
      <label>
         <input type="radio" name="choice" value="b">${currentQuestion.choices.b}
      </label><br>
      <label>
         <input type="radio" name="choice" value="c">${currentQuestion.choices.c}
      </label><br>
      <label>
         <input type="radio" name="choice" value="d">${currentQuestion.choices.d}
      </label><br>
      <input class="q-btn next-action" type="button" value="Next Question" onclick="nextQuestion()">`
   )

   currentAnswer.push($("input[type='radio'][name='choice']:checked").val());
}

function nextQuestion() {
   
   index++;
   
   currentQuestion = questions[index];

   // outputs first question
   if (index < (questions.length - 1)) {
      $('.quizzer').html(
         `<p class="text-centre">${currentQuestion.question}</p>
         <div class="quiz-input">
         <label>
            <input type="radio" name="choice" value="a">${currentQuestion.choices.a}
         </label><br>
         <label>
            <input type="radio" name="choice" value="b">${currentQuestion.choices.b}
         </label><br>
         <label>
            <input type="radio" name="choice" value="c">${currentQuestion.choices.c}
         </label><br>
         <label>
            <input type="radio" name="choice" value="d">${currentQuestion.choices.d}
         </label><br>
         <input class="q-btn next-action" type="button" value="Next Question" onclick="nextQuestion()">
         </div>`
      );

      currentAnswer.push($("input[type='radio'][name='choice']:checked").val());

   } else {
      $('.quizzer').html(
         `<p class="text-centre">${currentQuestion.question}</p>
         <div class="quiz-input">
         <label>
            <input type="radio" name="choice" value="a">${currentQuestion.choices.a}
         </label><br>
         <label>
            <input type="radio" name="choice" value="b">${currentQuestion.choices.b}
         </label><br>
         <label>
            <input type="radio" name="choiceA" value="c">${currentQuestion.choices.c}
         </label><br>
         <label>
            <input type="radio" name="choice" value="d">${currentQuestion.choices.d}
         </label><br>
         <input class="q-btn next-action" type="button" value="Submit" onclick="myFunction()">
         </div>`
      );

      currentAnswer.push($("input[type='radio'][name='choice']:checked").val());
   }
 
};

function getUserChoice() {

   score = 0;

   for (let i = 0; i < currentAnswer.length; i++) {
      if (currentAnswer[i] === currentQuestion.correctChoice) {
         score += 10;
      } else {
         score = 0;
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

   $('.quizzer').html(
      `<h1>${currentAnswer[1]}</h1>
      <p>You scored <span>${score}</span>`
   );
}