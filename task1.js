let arr =  ['cat', 2, 3, 4, 0];
let evenCount =0;
let oddCount =0;
let nullCount = 0;
let arrayLength = arr.length;

function countNumbertypes() {
  for (let i = 0; i < arrayLength; i = i + 1){
    if (arr[i]%2 === 0) {
      if (arr[i] != 0){
        evenCount+=1;
      } else {
        nullCount+=1;
      }
    } else if (arr[i]%2 >= 0){
      oddCount+=1;
    }
  }
}

countNumbertypes();

console.log("Четные: " + evenCount + ", Нечетные: " + oddCount);
if (nullCount>0) {
  console.log("Нули: " + nullCount);
}