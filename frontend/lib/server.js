const express = require('express');
const path = require('path');

const app = express();
const root = {root: path.resolve(__dirname, '..')};

app.use('*', (req, res) => res.sendFile('public/index.html', root));
app.listen(8080, () => console.log('Listening to 8080'));
