//IMMIDIATELY INVOKED FUNCTIONN EXPRESSION(IIFE)

(function chai() {
  //NAMED IIFE
  console.log("DB Connected");
})(); //U NEED TO END IT WITH SEMICOLON TO STOP THE SCOPE
((name) => {
  console.log(`DB Connected ${name} Two`); //PARAMETERS PASSED
})("Rayyan");
