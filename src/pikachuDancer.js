var makePikachuDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'pikachu-icon.png');
  this.$node.addClass('pikachu');
  console.log(this.$node);
};

makePikachuDancer.prototype = Object.create(makeDancer.prototype);
makePikachuDancer.prototype.constructor = makePikachuDancer;