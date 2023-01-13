var form = document.getElementById('form')
var button = document.getElementById('search-button');

button.addEventListener('click', event => {
  event.preventDefault()

  var formData = new FormData(form)
  var product = formData.get('item')
  fetch('http://localhost:5000/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({item: `${product}`})
  })
  .then((response) => response.text())
  .then((html => {
    var parser = new DOMParser()
    var newDoc = parser.parseFromString(html, 'text/html')
    var container = document.querySelector('.stock-data')
    var stockData = newDoc.querySelector('.stock-data').innerHTML
    container.innerHTML = stockData
  }))
  .catch(err => console.error('Failed to fetch page: ', err))
})
