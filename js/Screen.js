export default class Screen {
  getInputText = () => {
    const textInput = document.getElementById("text-input");
    if (!textInput) {
      return false;
    }
    return textInput.value;
  };

  setOutputText = (text) => {
    if (!text) {
      return false;
    }

    document.getElementById("output-default").classList.add("desactive");

    document.getElementById("output-encrip-decr").classList.remove("desactive");

    document.getElementById("text-output").innerText = `${text}`;
  };

  alertCopied = () => {
    let btnCopie = document.getElementById("clipboardCopy");
    btnCopie.textContent = "Copiado!";
  };

  returnDefaultBtnCopy = () => {
    let btnCopie = document.getElementById("clipboardCopy");
    btnCopie.textContent = "Copiar";
  };

  handleClipBoardCopy = () => {
    async function clipboardCopy() {
      let text = document.getElementById("text-output").textContent;
      await navigator.clipboard.writeText(text);
    }

    clipboardCopy();
    this.alertCopied();
  };

  validRequirementsTextInput = (text) => {
    function testRegex(textInput) {
      let regex = /^[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ.,~!@#$%&*)({}_'0-9]+$/;
      let textArr = textInput.split("");
      const existTextInvalid = textArr.find((element) => regex.test(element));
      return existTextInvalid ? false : true;
    }

    const passRequirements = testRegex(text);

    if (!passRequirements) {
      alert(
        "Digite apenas letras minusculas, sem acento ou sem caracteres especais"
      );
      return false; 
    }
    return true;
  };
}
