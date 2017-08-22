var makeSnorlaxSleeper = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'snorlax-icon.png');
  this.$node.addClass('snorlax');
  console.log(this.$node);
};

makeSnorlaxSleeper.prototype = Object.create(makeDancer.prototype);
makeSnorlaxSleeper.prototype.constructor = makeSnorlaxSleeper;