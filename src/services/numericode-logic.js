const getCharacter = number => String.fromCharCode(64 + parseInt(number, 10));

const divideBy27 = number => {
  let dividedNumber = number;
  while (dividedNumber > 27) dividedNumber = dividedNumber / 27;
  return dividedNumber;
};

const divideArray = messageArray =>
  messageArray.map(number => (number < 27 ? number : divideBy27(number)));

const arrayMapper = messageArray => {
  const dividedArray = divideArray(messageArray);
  return dividedArray.map(number => getCharacter(number));
};

const numericodeLogic = {
  decode: message => {
    const messageArray = message.split(" ");
    return arrayMapper(messageArray).join("");
  }
};

export default numericodeLogic;
