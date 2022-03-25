const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// git token  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
app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    // res.send('Hello World from Cybergate');
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Login route
app.get('/login', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    app.use(express.static(path.join(__dirname, 'client/login')));
    res.sendFile(path.join(__dirname, 'client/login', 'index.html'));    
});
// Sign up route
app.get('/signup', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    app.use(express.static(path.join(__dirname, 'client/sign_up')));
    res.sendFile(path.join(__dirname, 'client/sign_up', 'signup.html'));    
});

// Admin side route
app.get('/CyberAdmin', (req, res) => {
    app.use(express.static(path.join(__dirname, 'AdminDashBoard')));
    res.sendFile(path.join(__dirname, 'AdminDashBoard', 'index.html'));    
});

// Home page route
app.get('/home', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    app.use(express.static(path.join(__dirname, 'client/home')));
    res.sendFile(path.join(__dirname, 'client/home', 'index.html'));    
});

// Portfolio page
app.get('/service', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client')));
    app.use(express.static(path.join(__dirname, 'client/service')));
    res.sendFile(path.join(__dirname, 'client/service', 'service.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));