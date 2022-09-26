const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
const PORT = process.env.PORT || 1451;
const { connectToData } = require('./dbConnect');


app.use(express.static('projects/build'))
app.use(express.json())

connectToData()

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './projects/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})