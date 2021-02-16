const heart = document.querySelectorAll(".heart"),
  btn = document.querySelectorAll(".btn"),
  requestURL = 'https://www.cbr-xml-daily.ru/daily_json.js';

btn.forEach((item, num) => {
  item.addEventListener("click", () => {
    heart.forEach((i, n) => {
        if (num == n) {
        i.classList.toggle("clicked");
      }
    });
  });
});

// function getRequest(method, url){
//     return fetch(url).then(response => {
//         return response.json() 
//     })
// }

// getRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(er => console.log(er))

async function test() {
    await fetch("https://www.cbr-xml-daily.ru/daily_json.js", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain"
      }
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }