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

const checkForInputError = messageArray => {
  const isInvalid = messageArray.some(item => isNaN(item));
  if (isInvalid) {
    throw new Error("This is not a valid input!");
  }
};

const arrayMapper = messageArray => {
  checkForInputError(messageArray);
  const dividedArray = divideArray(messageArray);
  return dividedArray.map(number => getCharacter(number));
};

const checkForMessageTypeError = message => {
  const isInvalid = typeof message !== "string";
  if (isInvalid) {
    throw new Error("This is not a valid input!");
  }
};

const decode = message => {
  checkForMessageTypeError(message);
  const messageArray = message.split(" ");
  return arrayMapper(messageArray).join("");
};

export default decode;
