require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req , res) => {
    res.send("<h2>Chai Aur Code<h2>")
})

app.get('/twitter', (req , res) => {
    res.send('parampatel2725')
})

app.get('/login', (req , res) => {
    res.send('<h1> hello my name is param </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})