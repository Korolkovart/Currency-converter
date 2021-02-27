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
      let i = data.Valute;

      let input = document.querySelectorAll(".converter__input")[0];
      let result = document.querySelectorAll(".converter__input")[1];
      let converterForm = document.querySelector('.converter__form');

        


      for (let key in i) {

        // i[key].like = false
        console.log(key)

        let itemOption = document.createElement("option");
        let converterItems = document.querySelector(".converter-items");

        itemOption.innerHTML = i[key].CharCode;
        itemOption.value = i[key].Value;
        converterItems.append(itemOption);


        converterForm.addEventListener("submit", (event) => {
            event.preventDefault()

          let selected = Array.from(converterItems.options)
            .filter((option) => option.selected)
            .map((option) => option.value);

            let preResult = selected[0] * input.value;
            result.value = (preResult).toFixed(2)
        });
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
