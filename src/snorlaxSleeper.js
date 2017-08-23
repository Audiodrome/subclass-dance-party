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

  this.$node.animate({width: '15%'}, 100, 'swing');
  this.$node.animate({width: '18%'}, 100, 'swing');
  this.oldStep();
};

makeSnorlaxSleeper.prototype.lineUp = function() {

  this.$node.animate({top : (700 + 'px')}, 2000);
};