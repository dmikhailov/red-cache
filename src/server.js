const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.set({
        'Cache-Control': 'public, max-age=31536000', // Кэширование на 1 год
        'Expires': new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString() // Дата истечения через 1 год
    });
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server has started on http://localhost:${port}`);
});