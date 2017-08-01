const express = require ('express');
const logger = require ('morgan');
const path = require ('path');
const bodyParser = require ('body-parser');

const app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

app.get('/', (req, res) => {
  res.render('index');
});

const reviewRoutes = require ('./routes/review-routes')
app.use('/main' , reviewRoutes);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not found!',
  });
});
