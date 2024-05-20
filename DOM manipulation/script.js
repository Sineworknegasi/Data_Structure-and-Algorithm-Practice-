function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    let i = (Math.floor(Math.random() * options.length) + 1);
    return options[i - 1]
  }
  console.log(getRandomComputerResult());