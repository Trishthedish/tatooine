const express = require('express');
const path = require('path');

const app = express();
const root = {root: path.resolve(__dirname, '..')};

app.use('/api/todos', (req, res) => res.send({home: false, map: false}));
app.use('/bundle.js', (req, res) => res.sendFile('public/bundle.js', root));
app.use('*', (req, res) => res.sendFile('public/index.html', root));
app.listen(8080, () => console.log('Listening to 8080'));
