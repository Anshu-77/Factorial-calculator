let button = document.querySelector(".btn");
let answer = document.querySelector(".answer");
let input = document.querySelector(".input");
input.addEventListener("keypress", (event) => {
  if ((event.key = "Enter")) {
    if(input.value>18){
      answer.innerHTML = "LIMIT EXECEDES ";
      let audio = new Audio("error.mp3");
      audio.play();
    }
    else if(input.value<0){
      answer.innerHTML = "Invalid input";
      let audio = new Audio("error.mp3");
      audio.play();
    }
    else{

      if (isNaN(input.value)) {
        answer.innerHTML = "ERROR!!!";
        let audio = new Audio("error.mp3");
      audio.play();
    } else if (input.value == "") {
      answer.innerHTML = "";
    } else {
      let audio = new Audio("click.wav");
      audio.play();
      
      let product = 1;
      for (let index = 1; index <= parseInt(input.value); index++) {
        product = product * index;
      }
      answer.innerHTML = product;
    }
  }
}
});

button.addEventListener("click", () => {
  let audio = new Audio("click2.wav");
  audio.play();
  if (isNaN(input.value)) {
    answer.innerHTML = "ERROR!!!";
  } else if (input.value == "") {
    answer.innerHTML = "FILL SOMETHING";
  } else {
    let product = 1;
    for (let index = 1; index <= parseInt(input.value); index++) {
      product = product * index;
    }
    answer.innerHTML = product;
  }
});
