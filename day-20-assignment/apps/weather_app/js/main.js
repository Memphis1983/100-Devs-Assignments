document.querySelector("button").addEventListener("click", checkWeather);

function checkWeather() {
  let input = document.querySelector("input").value;
  const apiKey = "ad00faa6192aed94c24c6eb620b13651";
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${input}&unit=m`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      console.log(data.weather_icons);
      let city = data.location.name;
      let temp = data.current.temperature;
      let time = data.location.localtime;
      document.querySelector("#city").innerText = city;
      document.querySelector("#temp").innerText = `${temp} deg Celcius`;
      document.querySelector("#localTime").innerText = time;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
