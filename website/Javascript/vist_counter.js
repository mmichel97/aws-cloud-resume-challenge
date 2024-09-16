const counter = document.querySelector(".views__counter")
const url = "https://nt2sey6g273rj36idcylob4ge40tucle.lambda-url.us-east-2.on.aws/"
async function updateCounter() {
  let response = await fetch(url)
  let data = await response.json()
  counter.innerHTML = `Views: ${data}`
}


updateCounter()