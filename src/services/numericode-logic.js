const getCharacter = number => String.fromCharCode(64 + parseInt(number, 10));

const arrayMapper = messageArray =>
  messageArray.map(number => getCharacter(number));

const numericodeLogic = {
  decode: message => {
    const messageArray = message.split(" ");
    return arrayMapper(messageArray).join("");
  }
};

export default numericodeLogic;
