// const questions = []

// const getQuestion = document.getElementById('quizzer');


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
         a: '===',
         b: '=/',
         c: '!',
         d: '!=='
      },
      correctChoice: 'd'
   }
];

function printAnswers() {

}

let index = -1;

// variable to store current question
let currentQuestion;

// variable to store the correct answer to the current question
let currentAnswer;

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
         <input type="radio" name="choiceA" value="a">${currentQuestion.choices.a}
      </label><br>
      <label>
         <input type="radio" name="choiceA" value="b">${currentQuestion.choices.b}
      </label><br>
      <label>
         <input type="radio" name="choiceA" value="c">${currentQuestion.choices.c}
      </label><br>
      <label>
         <input type="radio" name="choiceA" value="d">${currentQuestion.choices.d}
      </label><br>
      <input class="q-btn next-action" type="button" value="Next Question" onclick="nextQuestion()">`
   )
}

function nextQuestion() {

   do {

      index++

      currentQuestion = questions[index];
   
      // outputs first question
      $('.quizzer').html(
         `<p class="text-centre">${currentQuestion.question}</p>
         <label>
            <input type="radio" name="choiceA" value="">${currentQuestion.choices.a}
         </label><br>
         <label>
            <input type="radio" name="choiceA" value="">${currentQuestion.choices.b}
         </label><br>
         <label>
            <input type="radio" name="choiceA" value="">${currentQuestion.choices.c}
         </label><br>
         <label>
            <input type="radio" name="choiceA" value="">${currentQuestion.choices.d}
         </label><br>
         <input class="q-btn next-action" type="button" value="Next Question" onclick="nextQuestion()">`
      )
   } while (index < questions.length);
}