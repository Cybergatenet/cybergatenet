const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    // res.send('Hello World from Cybergate');
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Login route
app.get('/login', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    app.use(express.static(path.join(__dirname, 'client/Neumorphic Login')));
    res.sendFile(path.join(__dirname, 'client/Neumorphic Login', 'index.html'));    
});
// Sign up route
app.get('/signup', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    app.use(express.static(path.join(__dirname, 'client/sign_up')));
    res.sendFile(path.join(__dirname, 'client/sign_up', 'attractive-signup-UI-design.html'));    
});

// Admin side route
app.get('/CyberAdmin', (req, res) => {
    app.use(express.static(path.join(__dirname, 'AdminDashBoard')));
    res.sendFile(path.join(__dirname, 'AdminDashBoard', 'index.html'));    
});

// Portfolio page
app.get('/portfolio', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    app.use(express.static(path.join(__dirname, 'client/portfolio')));
    res.sendFile(path.join(__dirname, 'client/portfolio', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));