document.querySelector("button").addEventListener("click", getPhotos);

function getPhotos() {
  const url = "https://random.dog/woof.json";
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (
        data.url.includes(".jpg") ||
        data.url.includes(".mp4") ||
        data.url.includes(".gif")
      ) {
        document.querySelector("img").style.visibility = "visible";
        document.querySelector("video").style.visibility = "hidden";
        document.querySelector("img").src = data.url;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
