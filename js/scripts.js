function finalScoreProducer (truth,smarts) {
  console.log(truth,smarts);
  var truthScore = 0;
  var intelligenceScore = 0;
  if (truth >= 0 && truth <= 5) {
    truthScore = 1;
  } else if (truth >= 6 && truth <= 10) {
    truthScore = 2;
  } else if (truth >= 11 && truth <= 15) {
    truthScore = 3;
  } else if (truth >= 16) {
    truthScore = 4;
  }

  if (smarts >= 0 && smarts <= 5) {
    intelligenceScore = 1;
  } else if (smarts >= 6 && smarts <= 10) {
    intelligenceScore = 2;
  } else if (smarts >= 11 && smarts <= 15) {
    intelligenceScore = 3;
  } else if (smarts >= 16) {
    intelligenceScore = 4;
  }
  return truthScore +","+ intelligenceScore;
}
  //front-end logic
  $(document).ready(function() {
    $("#user-input").submit(function(event){
      event.preventDefault();

      var answer1 = $("input:radio[name=question1]:checked").val();
      var answer2 = $("input:radio[name=question2]:checked").val();
      var answer3 = parseInt($("#question3").val());
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
          truthiness += 3;
        } else if (answer6 === "6D") {
          truthiness += 1;
        }

        //q7 logic
        intelligence += answer7Array.length;

        //q8 logic
        if (answer8 === "8B") {
          intelligence += 1;
        } else if (answer8 === "8C") {
          intelligence += 3;
        } else if (answer8 === "8D") {
          intelligence += 5;
        }

      var finalScore = finalScoreProducer(truthiness,intelligence);
      console.log(finalScore);

      switch (finalScore) {
        // case "0,0":
        // $("#myModal").modal('show');
        case "1,1":
        $("#comedyBangBang").modal('show');
        break;
        case "1,2":
        $("#noSleep").modal('show');
        break;
        case "1,3":
        $("#burtonReads").modal('show');
        break;
        case "1,4":
        $("#bingeMode").modal('show');
        break;
        case "2,1":
        $("#casketDelights").modal('show');
        break;
        case "2,2":
        $("#nightVale").modal('show');
        break;
        case "2,3":
        $("#lore").modal('show');
        break;
        case "2,4":
        $("#ridiculousHistory").modal('show');
        break;
        case "3,1":
        $("#creativePepTalk").modal('show');
        break;
        case "3,2":
        $("#creativePepTalk").modal('show');
        break;
        case "3,3":
        $("#rossAndCarrie").modal('show');
        break;
        case "3,4":
        $("#theModernAcre").modal('show');
        break;
        case "4,1":
        $("#waitWait").modal('show');
        break;
        case "4,2":
        $("#noSuchFish").modal('show');
        break;
        case "4,3":
        $("#smallDoses").modal('show');
        break;
        case "4,4":
        $("#bigThink").modal('show');
        break;
        default: alert("whoops! something went wrong!")
      }
      console.log("answer1 = "+answer1,"answer2 = "+ answer2,"answer3 = "+answer3,"answer4 = "+answer4,"answer5 = "+answer5,"answer6 = "+answer6,"answer7 = "+answer7Array,"answer8 = "+answer8);

      // var creativePepTalk = new Podcast ('Creative Pep Talk', 'https://i1.sndcdn.com/avatars-000316821086-8aqvnm-t500x500.jpg', "Are you a creative entrepreneur? Freelancer? Aspiring creative pro? If so, this podcast was made for you! Andy J. Miller is passionate about helping creatives strike the perfect balance between art and business. Through ridiculous analogies, personal stories and artist interviews, Andy hopes to help you break free from confusion and make a plan for your creative career success! You'll get this and MORE! (the more being Boyz II Men and Fraggle Rock references).", 'embed', 'http://www.creativepeptalk.com', '2', '3');
      //
      // var lore = new Podcast ('Lore', 'https://pbs.twimg.com/profile_images/578289731387047936/MxdXdQrT.jpeg', "Lore is an award-winning, critically-acclaimed podcast about true life scary stories. Lore exposes the darker side of history, exploring the creatures, people, and places of our wildest nightmares. Because sometimes the truth is more frightening than fiction.Each episode examines a new dark historical tale in a modern campfire experience. With more than 18,700 5-star reviews on Apple Podcasts and over 150-million listens, that's clearly a good thing.", 'embed', 'https://www.lorepodcast.com/', '3', '2');
      //
      // var comedyBangBang = new Podcast ('Comedy Bang Bang', 'https://www.earwolf.com/wp-content/uploads/2011/04/EAR_COVER_ComedyBangBang_2018Refresh_3000x3000_Final-300x300.jpg', 'Join host Scott Aukerman (“Comedy Bang! Bang!” on IFC, “Mr. Show”) for a weekly podcast that blends conversation and character work from today’s funniest comedians. While Scott begins by traditionally interviewing the celebrities, the open-door policy means an assortment of eccentric oddballs can pop by at any moment to chat, compete in games, and engage in comic revelry. With all that, and regular bonus episodes, we bet your favorite part will still be the plugs!', 'embed', 'https://www.earwolf.com/show/comedy-bang-bang/', '1', '1');
      //
      // var noSleepPodcast = new Podcast ('No Sleep Podcast', 'https://www.thenosleeppodcast.com/wp-content/uploads/2014/09/NoSleep.Podcast.S4.Logo_1400.jpg', 'For the dark hours when you dare not close your eyes. Tales of horror to frighten and disturb. Join us as the sleepless hours tick past. Brace yourself… for The NoSleep Podcast. A multi-award winning anthology series of original horror stories, The NoSleep Podcast features a cast of talented voice actors, rich atmospheric music and sound effects to enhance the frightening tales.', 'embed', 'https://www.thenosleeppodcast.com/', '2', '1');
      //
      // var bingeMode = new Podcast ('Binge Mode', 'https://pbs.twimg.com/profile_images/1029457789997932544/hf0O0TTs_400x400.jpg', "Jump on your broom and join The Ringer’s Mallory Rubin and Jason Concepcion as they take their signature deep dive into 'Harry Potter,' covering all the books and movies as well as the extended 'Potter' universe.", 'embed', 'https://soundcloud.com/bingemode', '4', '1');
      //
      // var theModernAcre = new Podcast ('The Modern Acre', 'https://pbs.twimg.com/profile_images/927982329762422784/5mvUotnr_400x400.jpg', "Tim and Tyler represent a 5th-generation farming family and are passionate about bringing together a community of next-generation farmers and ag entrepreneurs focused on innovating their businesses!", 'embed', 'http://themodernacre.co/', '4', '3');
      //
      // var bigThink = new Podcast ('Big Think', 'https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/e2/0d/29/e20d298c-76f7-860a-8004-d48d2eb8920a/source/1200x630bb.jpg', "Actionable lessons from the world’s greatest thinkers and doers make the Big Think audience smarter, faster. Big Think experts are at the top of their field, or disrupting it.The world’s largest archive of lessons from the people changing how we work, live, and experience. Unbiased, trusted and reliable. Millions of users seek us out, including thousands of experts inside the Big Think network.", 'embed', 'https://bigthink.com/', '4', '2');
      //
      // var smallDoses = new Podcast ('Small Doses', 'https://starburns.audio/wp-content/uploads/2018/02/SMALL-DOSES-big-768x768.jpg', 'Comedian, actress, writer, producer, and more, Amanda Seales doesn’t just make you laugh, she makes change! With an uncanny knack for taking serious topics (racism, rape culture, sexism, police brutality, etc.) and with humor, making them relatable and interesting, she combines intellectual wit, irreverent silliness and a pop culture obsession to create her unique style of smart funny content for the stage and screens.', 'embed', 'https://starburns.audio/podcasts/small-doses-with-amanda-seales/', '3', '4');
      //
      // var savageLovecast = new Podcast ('Savage Lovecast', 'http://toqueland.com/wp-content/uploads/2018/02/SavageLovecast.jpeg', 'Comedian, actress, writer, producer, and more, Amanda Seales doesn’t just make you laugh, she makes change! With an uncanny knack for taking serious topics (racism, rape culture, sexism, police brutality, etc.) and with humor, making them relatable and interesting, she combines intellectual wit, irreverent silliness and a pop culture obsession to create her unique style of smart funny content for the stage and screens.', 'embed', 'https://www.savagelovecast.com/', '1', '3');
      //
      // var waitWait = new Podcast ("Wait Wait Don't Tell me", 'https://media.npr.org/assets/img/2018/08/06/npr_wwdtm_podcasttile_sq-1e9edf5dfb49a3fff3703764e39442173ba8558a-s700-c85.jpg', "NPR's weekly current events quiz. Have a laugh and test your news knowledge while figuring out what's real and what we've made up. The show averages about 6 million weekly listeners on air and via podcast.", 'embed', 'https://www.npr.org/podcasts/344098539/wait-wait-don-t-tell-me', '1', '4');
      //
      // var noSuchThingAsAFish = new Podcast ('No Such Thing As A Fish', 'https://is4-ssl.mzstatic.com/image/thumb/Music91/v4/aa/45/19/aa451911-4fe8-9112-e4d2-1e139810a207/source/400x400bb.jpg', "A podcast from the QI offices in which the writers of the hit BBC show huddle around a microphone and discuss the best things they've found out this week. Hosted by Dan Schreiber.", 'embed', 'https://www.nosuchthingasafish.com/', '2', '4');
      //
      // var casketOfFictionalDelights = new Podcast ('Casket of Fictional Delights', 'https://is5-ssl.mzstatic.com/image/thumb/Music62/v4/6b/ba/6f/6bba6f72-1188-d0b7-50b5-01d536f8a8b9/source/400x400bb.jpg', 'The Casket of Fictional Delights specialises in producing high quality audio recordings of short stories and flash fiction compilations. The audios are recorded by actors and voiceover artists from around the world and produced by a professional studio manager ensuring we maintain a consistent high standard. We have produced some forty recordings and our podcasts on iTunes are found in the Top 20 ‘Short Story’ podcasts.', 'embed', 'https://www.thecasket.co.uk/audio/', '1', '2');
      //
      // var welcomeToNightVale = new Podcast ('Welcome to Night Vale', 'https://static1.squarespace.com/static/51e7119ae4b01c2e6a200e01/t/56f04169b6aa603335257757/1424727845212/?format=750w', "WELCOME TO NIGHT VALE is a twice-monthly podcast in the style of community updates for the small desert town of Night Vale, featuring local weather, news, announcements from the Sheriff's Secret Police, mysterious lights in the night sky, dark hooded figures with unknowable powers, and cultural events.", 'embed', 'http://www.welcometonightvale.com/', '2', '2');
      //
      // var ohNoRossAndCarrie = new Podcast ('Oh No Ross and Carrie', 'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/08/6e/dc/086edcd4-1d2f-25e3-3c68-0d6f7fda8786/source/400x400bb.jpg', "Each episode of our show deals with an investigation of a religion, fringe group, or fringe science practice. Join us as we ask tough questions, explore the nature of belief, and always find the humor in life’s biggest mysteries.", 'embed', 'http://ohnopodcast.com/', '4', '3');
      //
      // var levarBurtonReads = new Podcast ('LeVar Burton Reads', 'https://is4-ssl.mzstatic.com/image/thumb/Music127/v4/3e/59/50/3e5950a9-5880-4ea4-295e-43af2a194569/source/400x400bb.jpg', "In every episode, host LeVar Burton (Reading Rainbow, Roots, Star Trek) invites you to take a break from your daily life, and dive into a great story. LeVar’s narration blends with gorgeous soundscapes to bring stories by Neil Gaiman, Haruki Murakami, Octavia Butler, Ray Bradbury and more to life. So, if you’re ready, let’s take a deep breath..", 'embed', 'http://www.levarburtonpodcast.com/', '3', '1');
      //
      // var ridiculousHistory = new Podcast ('Ridiculous History', 'https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/3e/df/18/3edf181e-94b5-7867-2a80-48c0127fb457/source/400x400bb.jpg', "Ben Bowlin is a veteran podcaster at HowStuffWorks and has worked on numerous shows, including Stuff They Don't Want You To Know, CarStuff and BrainStuff. Over years of bizarre research on everything from ancient civilizations to previously undiscovered (and hilarious) antics of history’s most influential figures and institutions, Ben and his team have compiled the absolute best, weirdest and most ridiculous stories in human history.", 'embed', 'https://www.ridiculoushistoryshow.com/', '4', '2');
      //
      //
      //
      //   function Podcast(name, image, text, embed, link, intelligence, truthiness) {
      //   this.name = name;
      //   this.image = image;
      //   this.text = text;
      //   this.embed = embed;
      //   this.link = link;
      //   this.intelligence = intelligence;
      //   this.truth = truthiness;
      //
      // }
      // Podcast.prototype.Modalize
      // dummy modal
      // '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby='+ this.name + 'aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="comedyBangBang">'+this.name'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><div class="container-fluid"><p><img src="'+ this.image +'">'+ this.text+'<a href="'+this.link+'" target="_blank">'+this.link+'</a></p></div></div></div></div></div>'

    });
  });
