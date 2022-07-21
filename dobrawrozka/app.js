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

const port = 8080 || 3002;
app.listen(port, () => {
    console.log(`Port ${port} otwarty`)
})