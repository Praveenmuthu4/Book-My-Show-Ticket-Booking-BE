const express = require("express");
const path = require('path');
const dotenv = require('dotenv')
const cors = require('cors')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: path.join(__dirname, '../.env') });
  }

  const userRouter = require('./routes/user');
  const movieRouter = require('./routes/movies');
  const cinemaRouter = require('./routes/cinema');
  const showtimeRouter = require('./routes/showTime');
  const reservationRouter = require('./routes/reservation');

const app = express();
app.disable('x-powered-by');


app.use(cors())
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/build')));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
    );
    next();
  });

  app.use(userRouter);
  app.use(movieRouter);
  app.use(cinemaRouter);
  app.use(showtimeRouter);
  app.use(reservationRouter);

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '../../client/build/index.html'));
  });

module.exports = app;
