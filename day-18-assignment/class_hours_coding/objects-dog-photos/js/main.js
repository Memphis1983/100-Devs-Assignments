//Get a dog photo from the dog.ceo api and place the photo in the DOM

document.querySelector("img").addEventListener("click", changeImage);
const url = `https://dog.ceo/api/breeds/image/random `;
function changeImage() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.message);
      let image = (document.querySelector("img").src = data.message);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
