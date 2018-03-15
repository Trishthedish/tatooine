const express = require('express');
const app = express();
app.use('*', (req, res) => res.sendFile('public/index.html', {root: __dirname}));
app.listen(8080, () => console.log('Listening to 8080'));
