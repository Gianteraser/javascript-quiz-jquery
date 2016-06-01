var arrayOfQuizQA = [
    {
      question: "What programming language do I know?", 
      choices: ["Javascript", "Java", "Python", "C++"], 
      correctAnswer:0
    },
    {
      question: "What is my favorite pizza topping?", 
      choices: ["Pinnapple", "Mushroom", "Pepperoni", "Bacon"], 
      correctAnswer:2
    },
    {
      question: "How do I like my steak?", 
      choices: ["Well Done", "Rare", "Medium Rare", "Medium Well"], 
      correctAnswer:1
    },
    {
      question: "What is my favorite thing at sushi restaurant?", 
      choices: ["Spicy Mayo + Ponzu", "Handrolls", "Sashimi", "All of the Above"], 
      correctAnswer:3
    },
    {
      question: "What is my favorite color?", 
      choices: ["Red", "Black", "Blue", "White"], 
      correctAnswer:2
    }
  ]



  //create div with question title
  //create input style shows current selection
  //create divs with answers
  //create div button to hit next

// vars to hold html makers
var currArr = 0;
var formDIV = "<form class='inputs'></form>";
var question = '<div>' + arrayOfQuizQA[currArr]['question'] + '</div>';
// var choices =  '<div>' + arrayOfQuizQA[currArr]['choices'][i] + '</div>';
// var checkBoxButton = "<input type='radio' name='hello world'>" +   + "</input>";
var nextQuestionButton = "<input type='button' value='Next' id='next'> </input>"
//counter to hold right answers
var rightAnswerCounter = 0;





// function to hold the quiz

var quizMaker = function(){

	//results page after all questions are answered
	if(currArr >= arrayOfQuizQA.length){
		$('body').append('<div id="quizBody"> </div>')
		$('#quizBody').append("<h1>Congratulations you have completed the quiz!</h1>")
		$('#quizBody').append('<div id="result">' + 'you answered ' + rightAnswerCounter + ' questions correctly' + ' </div>');

	}
	// current right answer in number form
	var numericAnswer = arrayOfQuizQA[currArr]['correctAnswer']
	var answer = arrayOfQuizQA[currArr]['choices'][numericAnswer];

	//starting div
	$('body').append('<div id="quizBody"> </div>')

	// add question html
	$('#quizBody').append('<div>' + arrayOfQuizQA[currArr]['question'] + '</div>');

	// add a input form the the html
	$('#quizBody').append(formDIV);


	// go through choice array adding each choice to a html input element
	for(var i =0; i < arrayOfQuizQA[currArr]['choices'].length; i++){

		$('form').append("<input type='radio' name='choices' style='vertical-align:middle' value="+ arrayOfQuizQA[currArr]['choices'][i]  +">" + arrayOfQuizQA[currArr]['choices'][i] + "</input>");


	}	



	// this will increment the answer counter if the right answer is selected
	// STILL NEEDS TO BE IMPLEMENTED- if a person goes back and forth selecting things will increment it more than once
	$('input').on('click', function(){
		if(answer == $("input:checked").val()){
			rightAnswerCounter++

		}

	})

	// create button to advance to next question

	$('#quizBody').append(nextQuestionButton)

	$('input#next').click(function(){
		$('#quizBody').remove()
		currArr++;
		quizMaker();
		
		

	})


}

quizMaker();
