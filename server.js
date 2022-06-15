const express = require('express');
const app = express();

const PORT = process.env.PORT || 1451;

app.use(express.static('projects/build'))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})