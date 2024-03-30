const inputData = document.getElementById("decimal");
const submitBtn = document.getElementById("convert");
const result = document.getElementById("result");
const changer = document.getElementById("changer");

const decimalToBinary = () => {
  let binary = Number(inputData.value).toString(2);
  console.log(binary);
  result.innerHTML = binary;
};

const BinaryToDecimal = () => {
  const Decimal = parseInt(`${inputData.value}`, 2);
  console.log(Decimal);
  result.innerHTML = Decimal;
};

submitBtn.addEventListener("click", () => {
  if (inputData.getAttribute("placeholder") === "Enter a decimal number") {
    inputData.setAttribute("placeholder", "Enter a binary number");
    document.querySelector("h1").innerHTML = "Binary to Decimal Converter";
  } else if (
    inputData.getAttribute("placeholder") === "Enter a binary number"
  ) {
    inputData.setAttribute("placeholder", "Enter a decimal number");
    document.querySelector("h1").innerHTML = "Decimal to Binary Converter";
  }
});

changer.addEventListener("click", () => {
  if (inputData.value.length === 0) {
    alert("please enter a number that you want to convert");
  } else {
    if (inputData.getAttribute("placeholder") === "Enter a decimal number") {
      console.log("Decimal to Binary Converter");
      decimalToBinary();
    } else if (
      inputData.getAttribute("placeholder") === "Enter a binary number"
    ) {
      console.log("Binary to Decimal Converter");
      BinaryToDecimal();
    }
  }
});
