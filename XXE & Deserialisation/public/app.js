/*select form & html elements as well assubmit button*/

var originalDoc = document.querySelector('html')
const form = document.getElementById('form')
const button = document.querySelector('.search-button');

/* listen for click event on the submit button */

button.addEventListener('click', event => {
  event.preventDefault()

  /* extract submitted formdata*/
  
  const formData = new FormData(form)
  const product = formData.get('item')
  
  /*construct json post request */
  
  fetch('http://localhost:5000/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({item: `${product}`})
  })
  .then((response) => response.text())
  
  /*parse the  response and replace the webpage html with the fecthed html */
  
  .then((html) => {
    var parser = new DOMParser()
    var newDoc = parser.parseFromString(html, 'text/html')
    originalDoc.innerHTML = newDoc.querySelector('html').innerHTML 
  })
  .catch(err => console.error('Failed to fetch page: ', err))
})
