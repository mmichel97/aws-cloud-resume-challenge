const counter = document.querySelector(".views__counter")
const url = "https://ndqbncx4btbt62fcvq4fb6gv7q0scohb.lambda-url.us-east-2.on.aws/"
async function updateCounter() {
  let response = await fetch(url)
  let data = await response.json()
  counter.innerHTML = `Views: ${data}`
}


updateCounter()