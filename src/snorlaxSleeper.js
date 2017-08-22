var makeSnorlaxSleeper = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'snorlax-icon.png');
  this.$node.addClass('snorlax');
  console.log(this.$node);
};

makeSnorlaxSleeper.prototype = Object.create(makeDancer.prototype);
makeSnorlaxSleeper.prototype.constructor = makeSnorlaxSleeper;
makeSnorlaxSleeper.prototype.oldStep = makeDancer.prototype.step;

makeSnorlaxSleeper.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step.call(this);
  //this.$node.toggle({ effect: "scale"});
  $(this.$node).animate({width: '15%'}, 100, 'swing');
  $(this.$node).animate({width: '18%'}, 100, 'swing');
  this.oldStep();

  // $(this.$node).animate ({right: '+=1400'}, 5000, 'linear');
  // $(this.$node).animate ({right: '-=1400'}, 5000, 'linear');

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
};

makeSnorlaxSleeper.prototype.lineUp = function() {

  $(this.$node).animate({top : (700 + 'px')}, 2000);
}