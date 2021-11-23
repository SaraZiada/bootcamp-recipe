const express = require('express')
const app = express()
// const api = require('./api')
const path = require('path')
var urllib = require('urllib')

let ourData = {}
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))


app.get('/recipes/:ingredient',function(request,response){
    let ingredient = request.params.ingredient;

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data, res) {
        ourData = JSON.parse(data)
        ourData = ourData.results.map(r => { return {ingredients:r.ingredients, title:r.title, thumbnail:r.thumbnail, href:r.href}})
        response.send(ourData)
    });
    
})


app.get('/sanity/',function(request,response){
    response.send("OK")
})

const port = 8080
app.listen(port,function(){
    console.log("Running on port "+port)
})