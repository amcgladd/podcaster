// switch (score) {
//   case "1,1":
//
//     break;
//   case "1,2":
//
//     break;
//   case "1,3":
//
//     break;
//   case "1,4":
//
//   break;
//   case "2,1":
//
//     break;
//   case "2,2":
//
//     break;
//   case "2,3":
//
//     break;
//   case "2,4":
//
//     break;
//   case "3,1":
//
//     break;
//   case "3,2":
//
//     break;
//   case "3,3":
//
//     break;
//   case "3,4":
//
//   break;
//   case "4,1":
//
//     break;
//   case "4,2":
//
//     break;
//   case "4,3":
//
//     break;
//   case "4,4":
//
//     break;
// }




finalScoreProducer (truth,smarts) {
  var truthScore = 0;
  var intelligence = 0;
  if (truth >= 0 && truth <= 5) {
    truthScore = 1;
  }
}




//front-end logic
$(document).ready(function() {
  $("#user-input").submit(function(event){
    event.preventDefault();

  var answer1 = $("input:radio[name=question1]:checked").val();
  var answer2 = $("input:radio[name=question2]:checked").val();
  var answer3 = $("#question3").val();
  var answer4 = $("#question4").val();
  var answer5 = $("input:radio[name=question5]:checked").val();
  var answer6 = $("#question6").val();
  var answer7Array = [];
  var answer7 = $("input:checkbox:checked").each(function() {
    answer7Array.push($(this).val());
  });
  var answer8 = $("input:radio[name=question8]:checked").val();

  //scoring logic
  var truthiness = 0;
  var intelligence = 0;

  //q1 logic
  if (answer1 === "1A") {
    truthiness += 5;
  }

  //q2 logic
  if (answer2 === "2A") {
    intelligence += 5;
  } else if (answer2 === "2C") {
    intelligence += 2;
  }

  //q3 logic
  truthiness += answer3;

  //q4 logic
  if (answer4 === "4B") {
    truthiness += 3;
  } else if (answer4 === "4C") {
    truthiness += 5;
  }

  //q5 logic
  if (answer5 === "5B") {
    intelligence += 1;
  } else if (answer5 === "5C") {
    intelligence +=3;
  } else if (answer5 === "5D") {
    intelligence +=5;
  }

  //q6 logic
  if (answer6 === "6B") {
    truthiness += 5;
  } else if (answer6 === "6C") {
    truthiness +=3;
  } else if (answer6 === "6D") {
    truthiness +=1;
  }

  //q7 logic
  intelligence += answer7Array.length;

  //q8 logic
  if (answer8 === "8B") {
    intelligence +=1;
  } else if (answer8 === "8C") {
    intelligence +=3;
  } else if (answer8 === "8D") {
    intelligence +=5;
  }

finalScoreProducer (truthiness,intelligence);

  console.log("truthiness ="+ truthiness, "intelligence ="+ intelligence);
  console.log("answer1 = "+answer1,"answer2 = "+ answer2,"answer3 = "+answer3,"answer4 = "+answer4,"answer5 = "+answer5,"answer6 = "+answer6,"answer7 = "+answer7Array,"answer8 = "+answer8);
  })
});
