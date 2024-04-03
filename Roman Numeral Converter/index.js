const inputNumber = document.getElementById("number");
const output = document.getElementById("output");
const button = document.getElementById("convert-btn");

const RomanNumerals = [
  {
    numeral: "I",
    value: 1,
  },
  {
    numeral: "IV",
    value: 4,
  },
  {
    numeral: "V",
    value: 5,
  },
  {
    numeral: "IX",
    value: 9,
  },
  {
    numeral: "X",
    value: 10,
  },
  {
    numeral: "XL",
    value: 40,
  },
  {
    numeral: "L",
    value: 50,
  },
  {
    numeral: "XC",
    value: 90,
  },
  {
    numeral: "C",
    value: 100,
  },
  {
    numeral: "CD",
    value: 400,
  },
  {
    numeral: "D",
    value: 500,
  },
  {
    numeral: "CM",
    value: 900,
  },
  {
    numeral: "M",
    value: 1000,
  },
];


const convertToRoman = (num) => {
    let roman = "";
    if (inputNumber.value.length === 0) {
        output.innerHTML = "Please enter a valid number";
        output.classList.add("red");
        return;
    } else {
        if ( num > 3999) {
            output.innerHTML = "Please enter a number between 1 and 3999";
            output.classList.add("red");
            return;
        } else if (num < 1) {
            output.innerHTML = "Please enter a number greater than or equal to 1";
            output.classList.add("red");
            return;
        } 
        
        else {
            for (let i = 12; i >= 0; i--) {
                while (num >= RomanNumerals[i].value) {
                roman += RomanNumerals[i].numeral;
                num -= RomanNumerals[i].value;
                }
            }
            output.innerHTML =  `${roman}`;
            output.classList.remove("red");
        }
    }
}

button.addEventListener("click", () => {
     convertToRoman(parseInt(inputNumber.value));
 });


 


