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
	
	var pictures = ["images/win.gif", "images/meh.jpeg", "images/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var range;

	if (correct == 0) {
		range = 2;
	}

	if (correct > 0 && correct < 3) {
		range = 1;
	}

	if (correct == 3) {
		range = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];
	}