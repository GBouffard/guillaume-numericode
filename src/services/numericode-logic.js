const getCharacter = number => String.fromCharCode(64 + parseInt(number, 10));

const divideBy27 = number => {
  let dividedNumber = number;
  while (dividedNumber > 26) {
    if (dividedNumber % 27 === 0) {
      dividedNumber = dividedNumber / 27;
    } else {
      dividedNumber = -32;
      break;
    }
  }
  return dividedNumber;
};

const divideArray = messageArray =>
  messageArray.map(number => (number < 27 ? number : divideBy27(number)));

const arrayMapper = messageArray => {
  const dividedArray = divideArray(messageArray);
  return dividedArray.map(number => getCharacter(number));
};

const logic = {
  decode: message => {
    const messageArray = message.split(" ");
    return arrayMapper(messageArray).join("");
  },
  isValid: message => !!message && message.match(/[^0-9 ]/g) === null
};

export default logic;
