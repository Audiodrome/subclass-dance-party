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
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step.call(this);
  //this.$node.toggle({ effect: "scale"});
  $(this.$node).animate({left: '+=20px'}, 100, 'swing');
  $(this.$node).animate({left: '-=20px'}, 100, 'swing');
  this.oldStep();

  // $(this.$node).animate ({right: '+=1400'}, 5000, 'linear');
  // $(this.$node).animate ({right: '-=1400'}, 5000, 'linear');

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
};

makePikachuDancer.prototype.lineUp = function() {

  $(this.$node).animate({top : (5 + 'px')}, 2000);
}