import Cryptography from "./Cryptography.js";
import Screen from "./Screen.js";
const screen = new Screen();

function HandleCryptography(option) {
  const textInput = screen.getInputText();
  screen.validRequirementsTextInput(textInput);
  const cryptography = new Cryptography(textInput);
  let textOutput;

  if (option === "encrypy") {
    textOutput = cryptography.encrypt();
  } else if (option === "decrypt") {
    textOutput = cryptography.decrypt();
  }

  screen.setOutputText(textOutput);
  screen.returnDefaultBtnCopy();
}

document
  .getElementById("btn-cryptography")
  .addEventListener("click", () => HandleCryptography("encrypy"));

document
  .getElementById("btn-decryptography")
  .addEventListener("click", () => HandleCryptography("decrypt"));

document
  .getElementById("clipboardCopy")
  .addEventListener("click", screen.handleClipBoardCopy);
