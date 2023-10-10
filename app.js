setTimeout(function() {
  console.log("첫번째 함수");
  setTimeout(function() {
    console.log("두번째 함수");
    setTimeout(function() {
      console.log("세번째 함수");
      setTimeout(function() {
        console.log("네번째 함수");
      },2000)
    },1000)
  }, 3000)
}, 1000)