
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
      question: 'What method returns the smallest integer greater or equal to a number',
      choices: {
         a: 'Math.ceil()',
         b: 'Math.round()',
         c: 'Math.min()',
         d: 'Math.fround()'
      },
      correctChoice: 'a'
   },
   {
      question: 'What will the following code return:<br> let arr = [1, 2, 3, 4, [5, 6, 7]];<br>console.log(arr[4]);',
      choices: {
         a: '5',
         b: '5, 6, 7',
         c: '6',
         d: '4'
      },
      correctChoice: 'b'
   },
   {
      question: 'What is the output of the following expression?<br> function multNmbrs(a, b) {<br>  var c = a*b;<br>} multNmbrs(2, 6);',
      choices: {
         a: 'Nothing',
         b: '8',
         c: '12',
         d: '24'
      },
      correctChoice: 'a'
   },
   {
      question: 'What is the correct attribute for linking your javascript file to an html document?',
      choices: {
         a: 'name',
         b: 'url',
         c: 'href',
         d: 'src'
      },
      correctChoice: 'd'
   }
];

const finalMessage = ['You are a pro at this.', 'You did well.', 'You can always try again', 'Wow! Just Wow!'];

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

function start() {

   $('header').slideUp(100);
   $('#bg-text').hide();

   index = index + 1;

   currentQuestion = questions[index];

   questionName = inputNames[index];
   
   // outputs first question
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
            <button class="start-action" onclick="window.reloadPage()">Back</button>
         </div>
      </div>`
   );
};


function getUserChoice() {

   if (index >= 0) {
      currentQuestion = questions[index];

      if($('input[name="'+questionName+'"]:checked').val() == currentQuestion.correctChoice) {
         score += 10;
         $(event.currentTarget).parent('label').addClass('correct-label');
      } else {
         $(event.currentTarget).parent('label').addClass('incorrect-label').mouseleave().removeClass('incorrect-label');
      }
   }
   
};

function printResult() {

   $('#bg-text').show();

   if (score === 100) {
      $('.quizzer').html(
         `<div class="result text-center">
            <h1>${finalMessage[0]}</h1>
            <p>You scored <span>${score}/100</span>
         </div>`
      );
   } else if (score >= 80 && score < 100) {
      $('.quizzer').html(
         `<div class="result text-center">
            <h1>${finalMessage[1]}</h1>
            <p>You scored <span>${score}/100</span>
         </div>`
      );
   } else if (score === -10) {
      $('.quizzer').html(
         `<div class="result text-center">
            <h1>${finalMessage[3]}</h1>
            <p>You scored <span>0/100</span>
         </div>`
      );
   } else {
      $('.quizzer').html(
         `<div class="result text-center">
            <h1>${finalMessage[2]}</h1>
            <p>You scored <span>${score}/100</span>
         </div>`
      );
   }

}

function myFunction() {

   getUserChoice();
   printResult(); 

}

function reloadPage() {
	location.reload();
}