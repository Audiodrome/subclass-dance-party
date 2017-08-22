$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });


  $('.addPikachuButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var pikachu = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(pikachu);
    var temp = $('body').append(pikachu.$node);
    console.log(JSON.stringify(pikachu.$node));
    $('body').append(pikachu.$node);
    console.log($(pikachu.$node).hasClass("pikachu"));
    // animatePikachu();
  });

  $('body').on('click', '.pikachu', function(event) {
    console.log(event);
    var pikachu = event.target;
    let start = Date.now();
    let timePassed = Date.now() - start;
    $(pikachu).animate({top : (5 + 'px')}, 2000);

    // let timer = setInterval(function() {
    //   let timePassed = Date.now() - start;
    //   pikachu.style.top = timePassed / 5 + 'px';
    //   if (timePassed > 2000) {
    //     clearInterval(timer);
    //   }
    // }, 20);
  });


  $('.alignButton').on('click', '.pikachu', function(event) {
    var padding = 50;
    $('.pikachu').animate({top : (5 + 'px')}, 2000);
    // for (var i = 0; i < window.dancers.length; i++) {
    //   // window.dancers[i].setPosition(i + padding, 10);
    //   // padding += 50;
    //   var pikachu = window.dancers[i];
    //   $(pikachu).animate({top : (5 + 'px')}, 2000);
    // }
  });
});

var animatePikachu = function() {
  //pikachu.onclick = function() {
  let start = Date.now();
    
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    pikachu.style.left = timePassed / 5 + 'px';
    if (timePassed > 2000) {
      clearInterval(timer);
    }
  }, 20);
  //};
};

