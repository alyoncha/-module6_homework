let number = 1010;

function numberType(a) {
  let result = true;
  if (a>1000){
    result = "Данные не верны";
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        result = "Число не простое"
        break;
      }
    }
    if (result == true) {
      result = "Число простое";
    }
  }
  return result;
}

console.log(`${numberType(number)}`);