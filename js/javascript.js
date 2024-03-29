console.log("Thank you for visiting my portfolio :)")


function animation() {
  const texts = [
    "Design Geek        ",
    "Language Lover       ",
    "Avid Reader          ",
    "Outdoor Enthusiast        ",
    "Proud Cat Mom          "
  ];
  let index = 0;
  let count = 0;
  let currentText = "";
  let letter = "";

  // THOUGHTS: I think this function could be replaced by loop - this will shorten the code and make it more efficient & faster.

  (function type() {
    // set index to zero once index number is equal to the lenght of "texts" array
    if (index === texts.length) {
      index = 0;
    }

    currentText = texts[index];
    letter = currentText.slice(0, ++count);
    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
      index++;
      count = 0;
    }
    setTimeout(type, 100);
  })();
}
animation();
