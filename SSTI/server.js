const express = require('express')
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false}))
app.use('/public', express.static('public'));

app.set('view engine', 'ejs')
const name = ''
app.get('/', (req, res) => {
    res.render('index', {name: name})
})

app.post('/', (req, res) => {
    let name = req.body.name
    res.cookie('name', name, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        secure: true,
        httpOnly: true
      })
    res.render('index', { name: name })
})

app.use(function(req, res, next) {
    let path = req.path.split('/')[1]
    let name = req.cookies.name
    let html = ejs.render('<body><h1 class="fourohfour">Sorry, <%= name %>, the page "' + path + '" doesn\'t exist</h1></body></html>', { name : name })

    fs.readFile('views/404.ejs', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        } else {
            fileContents = data.replace('<body>', html)
            res.status(404).send(fileContents)
        }
    })
})

app.listen(5000)