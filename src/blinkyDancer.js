var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  makeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // console.log(oldStep);

  // return blinkyDancer;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step.call(this);
  //this.$node.toggle({ effect: "scale"});
  $(this.$node).animate({top: '+=500'}, 5000, 'linear');
  $(this.$node).animate({top: '-=500'}, 5000, 'linear');
  this.oldStep();

  // $(this.$node).animate ({right: '+=1400'}, 5000, 'linear');
  // $(this.$node).animate ({right: '-=1400'}, 5000, 'linear');

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
};

//console.log(new makeDancer);
//console.log(new makeBlinkyDancer);