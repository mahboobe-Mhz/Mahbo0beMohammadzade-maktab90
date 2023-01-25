"use strict";
//^^^^^^^^^^^^^^^^^^^^^^^^^سوال -5 ^^^^^^^^^^^^^^^^^^

ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  "Do you agree ?",
  () => {
    alert("you agreed");
  },
  () => {
    alert("you cancle the execution.");
  }
);
