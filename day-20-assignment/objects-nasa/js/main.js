// *The user will enter a date.
// *Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getPic);
let apiKey = `dldyGTDehRdxnoK05xndVZGnt0mc0F1mmKFYRVpY`;

// *const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=`

function getPic() {
  let input = document.querySelector("input").value;
  if (input < "1995-06-16") {
    alert(`Dates between Jun 16, 1995 and Jan 26, 2021 only`);
  }
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${input}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        document.querySelector("iframe").style.visibility = "hidden";
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.querySelector("img").style.visibility = "hidden";
      } else {
        alert("Media not supported - Contact NASA IMMEDIATELY");
      }
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
