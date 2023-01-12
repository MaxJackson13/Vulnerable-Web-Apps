const express = require('express')
const fileUpload = require('express-fileupload');   /* access uploaded files in the `req.files` object */
const libxmljs = require("libxmljs");               /* xml parser */
const serialize = require('node-serialize')         /* (de)serialize javascript objects */
const ejs = require('ejs')                          /* templating engine for dynamic content in the views */

const app = express()

app.use(express.static('public'));                  /* middleware for serving static (client-side) files from public folder */ 
app.use(fileUpload())
app.use(express.json())                             /* parse json in request body */
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { products: false })
})

app.post('/', (req, res) => {
    /* check if .xml file uploaded */
    if (req.files && req.files.products && req.files.products.mimetype == 'text/xml') {
        var xmlFile = req.files.products.data.toString('utf-8')
        var parsedXml = libxmljs.parseXmlString(xmlFile, { noent:true, noblanks:true })
        var products = parsedXml.root().childNodes().map(product => product.childNodes()[0].text())
        return res.render('index', { products: products })
    }
    /* otherwise check for json body and parse the item out */
    
    else if (req.body.item) {
        var product = serialize.unserialize(req.body).item
        try {
            var product = product.split()
            return res.render('index', { products: product })
        } 
        catch (error) {
            console.log(error)
            return res.status(500)
        }
    }
    else {
        return res.status(500)
    }
})

app.listen(5000)
