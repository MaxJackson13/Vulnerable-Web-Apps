const express = require('express')
const fileUpload = require('express-fileupload');
const libxmljs = require("libxmljs");
const serialize = require('node-serialize')
const ejs = require('ejs')

const app = express()

app.use(express.static('public'));
app.use(fileUpload())
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { products: false })
})

app.post('/', (req, res) => {
    if (req.files && req.files.products && req.files.products.mimetype == 'text/xml') {
        var xmlFile = req.files.products.data.toString('utf-8')
        var parsedXml = libxmljs.parseXmlString(xmlFile, { noent:true, noblanks:true })
        var products = parsedXml.root().childNodes().map(product => product.childNodes()[0].text())
        return res.render('index', { products: products })
    }
    else if (req.body.item) {
        var product = serialize.unserialize(req.body).item

        try {
          var product = product.split()
          return res.render('index', { products: product })

        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    }
    else {
        return res.status(500)
    }
})

app.listen(5000)