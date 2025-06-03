const valor1 = 10;
const valor2 = -5;
const valor3 = "10";
const valor4 = 10.5;

function isInteiroPositivo(valor) {
  if (typeof valor == "number" && Number.isInteger(valor) && valor >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isInteiroPositivo(valor1));
console.log(isInteiroPositivo(valor2));
console.log(isInteiroPositivo(valor3));
console.log(isInteiroPositivo(valor4));
