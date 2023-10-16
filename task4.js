function func(startNum, endNum) {
  let time = setInterval(function(){
    console.log(startNum)
    if (startNum==endNum) {
      clearInterval(time);
    } else {
      startNum++;
    }
  }, 1000)
}

func(1, 5);


