const express = require('express')
const { engine } = require('express-handlebars')
const morgan = require('morgan')
const app = express()
const port = 3000
const db = require('./config/db')
const route = require('./routes')
const path = require('path');
const twilio = require('twilio');


// Connect to DataBase;
db.connect()

// Template engine
app.engine('hbs', engine({ 
  extname: '.hbs', 
  defaultLayout: "main"
}));
app.set("view engine", 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: false }))


app.post('/sendMessage', (req, res) => {
  var client = new twilio('AC409f2afac3e05659caa668c43ba2b070', '6886464ea38698c4a5536f40ce6aff11');

  client.message.create({
    to: '+84379124695',
    from: '+84369402764',
    body: 'Hello from twillio!'
  })
  res.send('SMS sent')
})

app.get('/', (req, res) => {
  res.render('home')
})

// Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})