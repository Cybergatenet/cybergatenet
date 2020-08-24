const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    // res.send('Hello World from Cybergate');
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/login', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    app.use(express.static(path.join(__dirname, 'client/Neumorphic Login')));
    // res.send('Hello World from Cybergate');
    res.sendFile(path.join(__dirname, 'client/Neumorphic Login', 'index.html'));    
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));