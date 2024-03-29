export default class Cryptography {
  constructor(text) {
    this.text = text;
    this.cipher = [
      {
        value: "e",
        key: "enter",
      },
      {
        value: "i",
        key: "imes",
      },
      {
        value: "a",
        key: "ai",
      },
      {
        value: "o",
        key: "ober",
      },
      {
        value: "u",
        key: "ufat",
      },
    ];
  }

  encrypt = () => {
    let textCryp = this.text;
    this.cipher.forEach((element) => {
      textCryp = textCryp.replaceAll(element.value, element.key);
    });
    return textCryp;
  };

  decrypt = () => {
    let textCryp = this.text;
    this.cipher.forEach((element) => {
      textCryp = textCryp.replaceAll(element.key, element.value);
    });

    return textCryp;
  };
}
