var originalDoc = document.querySelector('html')
const form = document.getElementById('form')
const button = document.querySelector('.search-button');

button.addEventListener('click', event => {
  event.preventDefault()

  const formData = new FormData(form)
  const product = formData.get('item')
  
  fetch('http://localhost:5000/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({item: `${product}`})
  })
  .then((response) => response.text())
  .then((html) => {
    var parser = new DOMParser()
    var newDoc = parser.parseFromString(html, 'text/html')
    originalDoc.innerHTML = newDoc.querySelector('html').innerHTML 
  })
  .catch(err => console.error('Failed to fetch page: ', err))
})
