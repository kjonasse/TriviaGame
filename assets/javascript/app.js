// Trivia Game Homework 

// =================


function check(){

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;

    if (question1 == "Oregon") {
      correct++;
    }

    if (question2 == "God") {
      correct++;
    }
    
    if (question3 == "donut") {
      correct++;
    }
    
    if (question4 == "meh") {
      correct++;
    }

    if (question5 == "episodes") {
      correct++;
    }
    

  var messages = ["Great job - You are a Winner!", "Meh, you did OK!", "Try harder next time!"];
  var pictures = ["assets/images/win.gif", "assets/images/meh.gif", "assets/images/lose.gif"];
  var range;

    if (correct < 1) {
      score = 2;

    }

    if (correct > 0 && correct < 4) {
      score = 1;
    }

    if (correct > 4) {
      score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[score];

}



  





























