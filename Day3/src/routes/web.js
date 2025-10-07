const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World & nodemon! ')
})
router.get('/ejs', (req, res) => {
  // res.send('Hello World BINH!') 
  res.render('sample.ejs')
})

module.exports = router;