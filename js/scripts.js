switch (score) {
  case "1,1":

    break;
  case "1,2":

    break;
  case "1,3":

    break;
  case "1,4":

  break;
  case "2,1":

    break;
  case "2,2":

    break;
  case "2,3":

    break;
  case "2,4":

    break;
  case "3,1":

    break;
  case "3,2":

    break;
  case "3,3":

    break;
  case "3,4":

  break;
  case "4,1":

    break;
  case "4,2":

    break;
  case "4,3":

    break;
  case "4,4":

    break;
}


// var score = function(inputArray) {
//   var truthiness = 0;
//   var intelligence = 0;
//
// inputArray.map(function(type))
//
// }
//
//

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

  console.log("answer1 = "+answer1,"answer2 = "+ answer2,"answer3 = "+answer3,"answer4 = "+answer4,"answer5 = "+answer5,"answer6 = "+answer6,"answer7 = "+answer7Array,"answer8 = "+answer8);
  })
});
