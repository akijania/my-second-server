const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use('/user', (req, res, next) => {
  res.send('You need to log in!');
});

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/home', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.get('/user/settings', (req, res) => {
  res.show('user/settings.html');
});

app.get('/user/panel', (req, res) => {
  res.show('user/panel.html');
});

app.get('/404.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/404.jpg'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/views/error.html'));
});

app.listen(7000, () => {
  console.log('Server is running on port: 7000');
});
