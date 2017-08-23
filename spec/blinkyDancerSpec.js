describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('pikachuDancer', function() {
  var pikachuDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pikachuDancer = new makePikachuDancer(10, 20, timeBetweenSteps);
  });
  
  it('should have a jQuery $node object', function() {
    expect(pikachuDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be instance of pikachuDancer', function() {
    expect(pikachuDancer).to.be.an.instanceof(makePikachuDancer);
  });

  it('should have a step function that makes its shift', function() {
    sinon.spy(pikachuDancer.$node, 'animate');
    pikachuDancer.step();
    expect(pikachuDancer.$node.animate.called).to.be.true;
  });
});

describe('snorlaxSleeper', function() {
  var snorlaxSleeper, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    snorlaxSleeper = new makeSnorlaxSleeper(10, 20, timeBetweenSteps);
  });
  
  it('should have a jQuery $node object', function() {
    expect(snorlaxSleeper.$node).to.be.an.instanceof(jQuery);
  });

  it('should be instance of pikachuDancer', function() {
    expect(snorlaxSleeper).to.be.an.instanceof(makeSnorlaxSleeper);
  });

  it('should have a step function that makes its node grow and shrink', function() {
    sinon.spy(snorlaxSleeper.$node, 'animate');
    snorlaxSleeper.step();
    expect(snorlaxSleeper.$node.animate.called).to.be.true;
  });
});
