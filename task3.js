function summ(num1){
  return function(num2=5){
    let sum = num1 + num2;
    return sum
  }
}
const resultFunc = summ(2);
console.log(`Cумма: ${resultFunc()}`);