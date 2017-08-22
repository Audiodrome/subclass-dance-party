var makePikachuDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'pikachu-icon.png');
  this.$node.addClass('pikachu');
  console.log(this.$node);
};

makePikachuDancer.prototype = Object.create(makeDancer.prototype);
makePikachuDancer.prototype.constructor = makePikachuDancer;
makePikachuDancer.prototype.oldStep = makeDancer.prototype.step;

makePikachuDancer.prototype.step = function() {
  $(this.$node).animate({left: '+=20px'}, 100, 'swing');
  $(this.$node).animate({left: '-=20px'}, 100, 'swing');
  this.oldStep();
};

makePikachuDancer.prototype.lineUp = function() {
  $(this.$node).animate({top : (5 + 'px')}, 2000);
};