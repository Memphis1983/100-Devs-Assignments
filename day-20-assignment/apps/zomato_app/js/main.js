// document.querySelector("button").addEventListener("click", checkCity);
//
// function checkCity() {
// let city = document.querySelector("input").value
// const url = "https://developers.zomato.com/api/v2.1/cities?q="+input;
// fetch(url, {
//      headers: {
//        'Accept': 'application/json',
//        'user-key':'dcc56db0f9ade4527cba7124aa196d2f'
//      }
//    })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     });
//     .catch(err => {
//       console.log(`error ${err}`)
//     })

document.querySelector('button').addEventListener('click', getFetch)

    function getFetch(){
      const city = document.querySelector('input').value
      city.split(' ').join('')
      const url = 'https://developers.zomato.com/api/v2.1/cities?q='+city



    //CityID Pull
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'user-key':'dcc56db0f9ade4527cba7124aa196d2f'
        }
      })
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            console.log(data.location_suggestions[0].id)
            let cityId = data.location_suggestions[0].id
            console.log(`cityId = ${cityId}`)
            let url2= 'https://developers.zomato.com/api/v2.1/search?entity_id='+cityId+'&entity_type=city&cuisines=82'
            console.log(url2)

            fetch(url2,  {
              headers: {
                  'Accept': 'application/json',
                  'user-key':'dcc56db0f9ade4527cba7124aa196d2f'
                }
              })
              .then(res => res.json()) // parse response as JSON
              .then(data2 => {
                console.log(data2)
                rand= Math.floor(Math.random()* 10)
                console.log(data2.restaurants[rand].restaurant.name)
                document.querySelector('h2').innerText=data2.restaurants[rand].restaurant.name
                document.querySelector('h3').innerText=data2.restaurants[rand].restaurant.phone_numbers
                document.querySelector('h4').innerText= data2.restaurants[rand].restaurant.url
                document.querySelector('a').href= data2.restaurants[rand].restaurant.url
              })
            })

          .catch(err => {
              console.log(`error ${err}`)
          });
    }
