const heart = document.querySelectorAll(".heart"),
  btn = document.querySelectorAll(".btn"),
  requestURL = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=16/02/2021';

btn.forEach((item, num) => {
  item.addEventListener("click", () => {
    heart.forEach((i, n) => {
        if (num == n) {
        i.classList.toggle("clicked");
      }
    });
  });
});

function getRequest(method, url){
    return fetch(url).then(response => {
        return response.text()
    })
}

getRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(er => console.log(er))



