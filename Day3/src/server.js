require('dotenv').config()
const express = require('express') // Commonjs
// const path = require('path') // Commonjs

// import express from 'express'; // es modules 
const app = express() // app express
const port = process.env.POST // port
const configViewEngine = require('./config/viewEngine');
const routerWeb = require('./routes/web');
// config template engine
configViewEngine(app);

// Khai báo Route
app.use('/', routerWeb);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})