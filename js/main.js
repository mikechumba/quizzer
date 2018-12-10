
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

const finalMessage = ['You are a pro at this.', 'You did well', 'You can always try again', 'Wow! Just Wow!'];

const inputNames = [];

for (let i = 0; i < questions.length; i++) {
   inputNames.push(`q${i}`);
}

let index = -1;

// variable to store current question
let currentQuestion;

// variable to store the correct answer to the current question
const currentAnswer = [];
const rightChoice = [];

let score = -10;

// to store name for current question
let questionName;

let answer;

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
         <input type="radio" name="${questionName}" value="a" onclick="getUserChoice()">${currentQuestion.choices.a}
      </label><br>
      <label>
         <input type="radio" name="${questionName}" value="b" onclick="getUserChoice()">${currentQuestion.choices.b}
      </label><br>
      <label>
         <input type="radio" name="${questionName}" value="c" onclick="getUserChoice()">${currentQuestion.choices.c}
      </label><br>
      <label>
         <input type="radio" name="${questionName}" value="d" onclick="getUserChoice()">${currentQuestion.choices.d}
      </label><br>
      <input class="q-btn next-action" type="button" value="Next Question" onclick="nextQuestion()">`
   );

   // if (($('input[name="'+questionName+'"]:checked').val()) === currentQuestion.correctChoice) {
   //    score = score + 10;
   // }

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
            <input type="radio" name="${questionName}" value="a" onclick="getUserChoice()">${currentQuestion.choices.a}
         </label><br>
         <label>
            <input type="radio" name="${questionName}" value="b" onclick="getUserChoice()">${currentQuestion.choices.b}
         </label><br>
         <label>
            <input type="radio" name="${questionName}" value="c" onclick="getUserChoice()">${currentQuestion.choices.c}
         </label><br>
         <label>
            <input type="radio" name="${questionName}" value="d" onclick="getUserChoice()">${currentQuestion.choices.d}
         </label><br>
         <input class="q-btn next-action" type="button" value="Next Question" onclick="nextQuestion()">
         </div>`
      );

      // if (($('input[name="'+questionName+'"]:checked').val()) === currentQuestion.correctChoice) {
      //    score = score + 10;
      // }

   } else {
      $('.quizzer').html(
         `<p class="text-center">${currentQuestion.question}</p>
         <div class="quiz-input">
         <label>
            <input type="radio" name="${questionName}" value="a" onclick="getUserChoice()">${currentQuestion.choices.a}
         </label><br>
         <label>
            <input type="radio" name="${questionName}" value="b" onclick="getUserChoice()">${currentQuestion.choices.b}
         </label><br>
         <label>
            <input type="radio" name="${questionName}" value="c" onclick="getUserChoice()">${currentQuestion.choices.c}
         </label><br>
         <label>
            <input type="radio" name="${questionName}" value="d" onclick="getUserChoice()">${currentQuestion.choices.d}
         </label><br>
         <input class="q-btn next-action" type="button" value="Submit" onclick="myFunction()">
         </div>`
      );

      // if (($('input[name="'+questionName+'"]:checked').val()) === currentQuestion.correctChoice) {
      //    score = score + 10;
      // }
   
   }

};

function printGuide() {

   $('header').slideUp(100);
   $('#bg-text').hide();

   $('.quiz').html(
      `<div class="guide text-center">
         <h3>Guide</h3>
         <p>The questions are meant to just tease your knowledge on Javascript. They are preselected and not auto-generated.<br>
            Each question carries 10 points. That means that the highest score is 100 points. You can always revisit the questions if you fail.<br>
            Good Luck!
         </p>
         <div class="q-btn">
            <button class="start-action" onclick="start()">Start Quiz</button>
         </div>
      </div>`
   );
};


function getUserChoice() {

   // currentQuestion = questions[index];

   if (index >= 0) {
      currentQuestion = questions[index];

      if($('input[name="'+questionName+'"]:checked').val() == currentQuestion.correctChoice) {
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
   } else if (score === -10) {
      $('.quizzer').html(
         `<h1>${finalMessage[3]}</h1>
         <p>You scored <span>0</span>`
      );
   } else {
      $('.quizzer').html(
         `<h1>${finalMessage[2]}</h1>
         <p>You scored <span>${score}</span>`
      );
   }

}

function myFunction() {

   getUserChoice();
   printResult(); 

   // $('.quizzer').html(
   //    `<h1>${rightChoice[2]}</h1>
   //    <p>You scored <span>${score}</span>`
   // );
}