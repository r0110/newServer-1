const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => res.send('This is frontEnd!'));

app.listen(port);