"use strict";
//^^^^^^^^^^^^^^^^^ سوال -2 ^^^^^^^^^^^^^^
let stepObj = {
  step: 0,
  increase() {
    this.step++;
    return this;
  },
  decrease() {
    this.step--;
    return this;
  },
  reset() {
    this.step = 0;
    return this;
  },
  read: function () {
    console.log(this.step);
    return this;
  },
};
stepObj.increase().increase().read().decrease().read();
