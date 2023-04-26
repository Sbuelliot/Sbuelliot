function multiplyBy(num1) {
    return function(num2) {
      console.log(num1 + " * " + num2 + " = " + num1 * num2);
    };
  }
  
  const multiplyBy5 = multiplyBy(5);
  
  for (let i = 0; i <= 10; i++) {
    multiplyBy5(i);
  }