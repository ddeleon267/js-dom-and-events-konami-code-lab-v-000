const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0; //so you can access first element in array

  // add event listener to the body of the document
  // takes argument of eventtype as string as well as a function that
  // takes in the event as an input
  document.body.addEventListener('keydown', function(e) {
    //parse the event and store it as a key////////
    const key = parseInt(e.which || e.detail); //or could do e.location

    if (code[index] === key) { //access code element... does it match the keyown key??
      index++; //if so, incrememnt ind so you can access next element of code array to compare to next key event

      if (index === code.length) { //if you've incremented idx a certain number of times, this would emply
      //that all code keys have been entered in the correct order
        alert('Hurray!'); //if that's th case, hooray!!!

        index = 0; //reset for next time bb
      }
    } else {
      index = 0; //if the key doesn't match, reset; sux fo you!
    }
  });

}
