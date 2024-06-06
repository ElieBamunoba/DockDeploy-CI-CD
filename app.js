//A simple hello world node app

const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Hello World from Node');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});