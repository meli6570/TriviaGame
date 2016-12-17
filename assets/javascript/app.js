
var questions = [{
    question: "What is the name of Mitch and Cameron's daughter?",
    choices: ["Tulip", "Lily", "Iris", "Rose"],
    correctAnswer: 1
}, {
    question: "What is the relationshop between Luke and Manny?",
    choices: ["Brothers", "Manny is Luke's Uncle", "Luke is Manny's Uncle", "Cousins"],
    correctAnswer: 1
}, {
    question: "What is Cameron's alter ego clown name?",
    choices: ["Hobo", "Fizbo", "Chuckie", "Batman"],
    correctAnswer: 1
}, {
    question: "What did Mitchell dress up at for Halloween at his office?",
    choices: ["Spiderman", "Batman", "Fizbo", "Chuckie"],
    correctAnswer: 0
}, {
    question: "What is the name Phil gives himself on Valentine's Day?",
    choices: ["Clive Bixby", "Clive Davis", "Michael Jordan", "David Beckham"],
    correctAnswer: 0

}, {
    question: "What gift did the Dunphy kids give their parents on their anniversary?",
    choices: ["Matching watches", "A door lock", "Karaoke Machine", "Tickets to Hamilton"],
    correctAnswer: 1

}, {
    question: "What song does Cam play when he introduces Lily to the family?",
    choices: ["Brown Eyed Girl", "Like a Virgin", "Pretty Woman", "Circle of Life"],
    correctAnswer: 3

}, {
    question: "Where is Gloria originally from?",
    choices: ["Argentina", "Mexico", "Colombia", "Puerto Rico"],
    correctAnswer: 2

}, {
    question: "Who loves Stella the most?",
    choices: ["Gloria", "Jay", "Manny", "Joe"],
    correctAnswer: 1

}, {
    question: "What Claire and Mitchell's mom's name?",
    choices: ["Dede", "Bebe", "Cece", "Lily"],
    correctAnswer: 0


}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}


   var mins = 2;  //Set the number of minutes you need
    var secs = mins * 60;
    var currentSeconds = 0;
    var currentMinutes = 0;
    /* 
     * The following line has been commented out due to a suggestion left in the comments. The line below it has not been tested. 
     * setTimeout('Decrement()',1000);
     */
    setTimeout(Decrement,1000); 

    function Decrement() {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = secs % 60;
        if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
        secs--;
        document.getElementById("timerText").innerHTML = currentMinutes + ":" + currentSeconds; //Set the element id you need the time put into.
        if(secs !== -1) setTimeout('Decrement()',1000);
    }