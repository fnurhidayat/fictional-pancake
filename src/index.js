const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { 
    partial: 'partials/home',
    data: null
  })
})

app.get('/users', (req, res) => {
  let users = [
    {
      _id: 1,
      name: 'Fikri',
      email: 'test01@mail.com'
    },
    {
      _id: 2,
      name: 'Bob',
      email: 'test02@mail.com'
    },
    {
      _id: 3,
      name: 'Bib',
      email: 'test03@mail.com'
    },
  ]

  res.render('index', {
    partial: 'partials/users',
    data: {
      users
    }
  })
})

module.exports = app
