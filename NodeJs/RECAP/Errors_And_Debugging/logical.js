const logicalError = () => {
  let x = 5;
  if ((x = 10)) {
    //added a breakpoint here
    console.log(x);
  } else {
    console.log("x is not 10");
  }

  // let num = '10'
  // console.log(num + 10);



  
};
module.exports = logicalError;
