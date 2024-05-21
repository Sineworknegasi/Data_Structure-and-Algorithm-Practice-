const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const word = document.getElementById("word");
const meaning = document.getElementById("meaning");
const example = document.getElementById("example");
const pronuciation = document.getElementById("pron");
const sound = document.getElementById("sound");
const input_word = document.getElementById("input_word");
const search_btn = document.getElementById("search_btn");
const dic_form = document.getElementById("dic_form");
const audio = new Audio("https://api.dictionaryapi.dev/media/pronunciations/en/serene-us.mp3");


search_btn.addEventListener("click", () => {
  let inpword = input_word.value;
  fetch(url + inpword)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dic_form.style.display = "block";
      word.innerHTML = data[0].word;
      meaning.innerHTML = data[0].meanings[0].definitions[0].definition;
      example.innerText = data[0].meanings[0].definitions[0].example
      pronuciation.innerHTML = `${data[0].meanings[0].partOfSpeech} ${data[0].phonetics[1].text}`
      audio.src = data[0].phonetics[0].audio;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

sound.addEventListener("click", () => {
    audio.play();
})
