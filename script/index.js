const heart = document.querySelectorAll(".heart"),
  btn = document.querySelectorAll(".btn"),
  requestURL = "https://www.cbr-xml-daily.ru/daily_json.js";

let converterItems = document.querySelector(".converter-items");


btn.forEach((item, num) => {
  item.addEventListener("click", () => {
    heart.forEach((i, n) => {
      if (num == n) {
        i.classList.toggle("clicked");
      }
    });
  });
});

function getRequest(method, url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

let a = getRequest("GET", requestURL)
  .then(
    (data) => {
      let request = data.Valute;

    console.log(request);

      for (let key in request) {
        console.log(request[key].CharCode);
        console.log(request[key].Value);


        
      }
    }
  )
  .catch((er) => console.log(er));

// async function getCurrency() {
//     await fetch(requestURL, {
//       method: "GET",
//       headers: {
//         "Content-Type": "text/plain",
//       },
//     })
//       .then((response) => response.json())
//       .then((result) => console.log(result.Valute))
//       .catch((error) => console.log("error", error));

//   }
//   getCurrency();

//   let res = fetch(requestURL).then((response) => response.json());
//   res.Valute;

//   console.log(res)
