const joke_text = document.getElementById("Joke_text");
const joke_btn = document.getElementById("Joke_btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      joke_text.innerText = data.joke;
      console.log(data.joke);
    });
};
