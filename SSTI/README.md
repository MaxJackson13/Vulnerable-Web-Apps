This webapp is vulnerable to SSTI as user input is directly concatenated into a string which is subsequently rendered. This gives the user the opportunity to inject arbitrary javascript which will be rendered on the client side.

The vulnerable code is

```
let html = ejs.render('<body><h1 class="fourohfour">Sorry, <%= name %>, the page "' + path + '" doesn\'t exist</h1></body></html>', { name : name })
```

The app is secured by rendering file an `.ejs` file, then passing the user input as a parameter, e.g. 
```
res.render('404.ejs', { name: name, path: path })
```
