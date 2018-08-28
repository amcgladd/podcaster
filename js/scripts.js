var finalScore = truthiness + ',' + intelligence;


switch (score) {
  case "1,1":
  $("#comedyBangBang").modal('show')

    break;
  case "1,2":
  $("#noSleep").modal('show')

    break;
  case "1,3":
  $("#burtonReads").modal('show')
    break;
  case "1,4":
  $("#bingeMode").modal('show')

  break;
  case "2,1":
  $("#casketDelights").modal('show')

    break;
  case "2,2":
  $("#nightVale").modal('show')

    break;
  case "2,3":
  $("#lore").modal('show')

    break;
  case "2,4":
  $("#ridiculousHistory").modal('show')
    break;
  case "3,1":
  $("#creativePepTalk").modal('show')

    break;
  case "3,2":
  $("#creativePepTalk").modal('show')

    break;
  case "3,3":
  $("#rossAndCarrie").modal('show')

    break;
  case "3,4":
  $("#theModernAcre").modal('show')

  break;
  case "4,1":
  $("#waitWait").modal('show')

    break;
  case "4,2":
  $("#noSuchFish").modal('show')

    break;
  case "4,3":
  $("#smallDoses").modal('show')

    break;
  case "4,4":
  $("#bigThink").modal('show')

    break;
}


var score = function(inputArray) {
  var truthiness = 0;
  var intelligence = 0;

inputArray.map(function(type))

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


  console.log("answer1 = "+answer1,"answer2 = "+ answer2,"answer3 = "+answer3,"answer4 = "+answer4,"answer5 = "+answer5,"answer6 = "+answer6,"answer7 = "+answer7Array,"answer8 = "+answer8);
  })
});
