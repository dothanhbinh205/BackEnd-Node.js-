const express = require('express') // Commonjs
const path = require('path') // Commonjs
// import express from 'express'; // es modules 
 
const app = express() // app express
const port = 3000 // port

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ejs', (req, res) => {
  // res.send('Hello World BINH!')
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})