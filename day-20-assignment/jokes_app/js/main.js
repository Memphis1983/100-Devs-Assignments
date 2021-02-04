document.querySelector("#button").addEventListener("click", getPhotos);

function getPhotos() {
  const input = document.querySelector("input").value;

  const url = `https://official-joke-api.appspot.com/jokes/${input}/random`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].type);
      document.querySelector("h2").innerText = data[0].setup;
      document.querySelector("h3").innerText = data[0].punchline;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
