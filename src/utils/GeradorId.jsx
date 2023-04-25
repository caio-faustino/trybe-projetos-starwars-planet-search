// Requisito 01
// Requisito 05
// Requisito 08
// Requisito 10

const generateRandomNumber = (
  maior,
) => Math
  .floor(Math.random() * (maior + 1));

const tamanhoPadraoId = 6;

const GeradorId = (digits = tamanhoPadraoId) => {
  const digitosPermitidos = '1234567890abcdefghijklmnopqrstuvwxyz';
  const digitsLength = digitosPermitidos.length - 1;
  let geradorId = '';
  for (
    let i = 0;
    i < digits;
    i += 1
  ) {
    const randomNumber = generateRandomNumber(digitsLength);
    geradorId += digitosPermitidos[randomNumber];
  }
  return geradorId;
};

export default GeradorId;
