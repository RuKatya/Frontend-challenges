const express = require('express');
const app = express();
const path = require('path')

const PORT = process.env.PORT || 1451;

app.use(express.static('projects/build'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './projects/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})