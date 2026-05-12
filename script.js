let step = 0;


let ladder = {
  up: function () {
    step ++ ;
    return this;
  },
  down: function () {
    step --;
    return this;
  },
  showStep: function () { 
    return console.log(step);
  }
};

ladder.up().up().down().showStep();