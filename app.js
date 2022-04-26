const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('path', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.render('index')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Port ${port} otwarty`)
})