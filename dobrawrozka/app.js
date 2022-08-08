const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');

app.set('view engine', 'ejs')
app.set('path', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '/public')))
app.engine('ejs', ejsMate)

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/o-przedszkolu/nasza-misja', (req,res) => {
    res.render('o-przedszkolu/nasza-misja')
})

app.get('/o-przedszkolu/nasz-budynek', (req,res) => {
    res.render('o-przedszkolu/nasz-budynek')
})

app.get('/o-przedszkolu/wyzywienie', (req,res) => {
    res.render('o-przedszkolu/wyzywienie')
})

app.get('/o-przedszkolu/wypoczynek-i-zabawa', (req,res) => {
    res.render('o-przedszkolu/wypoczynek-i-zabawa')
})

app.get('/o-przedszkolu/kadra', (req,res) => {
    res.render('o-przedszkolu/kadra')
})


app.get('/o-przedszkolu/adaptacja', (req,res) => {
    res.render('o-przedszkolu/adaptacja')
})

app.get('/oferta/program-edukacyjny', (req,res) => {
    res.render('oferta/program-edukacyjny')
})

app.get('/oferta/rozwoj-jezykowy', (req,res) => {
    res.render('oferta/rozwoj-jezykowy')
})

app.get('/oferta/zajecia-dodatkowe', (req,res) => {
    res.render('oferta/zajecia-dodatkowe')
})

app.get('/oferta/grupa-zlobkowa', (req,res) => {
    res.render('oferta/grupa-zlobkowa')
})

app.get('/galeria', (req,res) => {
    res.render('galeria')
})

const port = 8080 || 3002;
app.listen(port, () => {
    console.log(`Port ${port} otwarty`)
})