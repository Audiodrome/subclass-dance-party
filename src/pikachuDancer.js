var makePikachuDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'src/pikachu-icon.png');
};

makePikachuDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makePikachuDancer.prototype.constructor = makePikachuDancer;
