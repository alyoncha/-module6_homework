const mathOperation = (x, n) => {
  for (let i = 1; i < n; i++) { 
    x*=x
  }
  console.log(x);
  }
  mathOperation(2, 1);