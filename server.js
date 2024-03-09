const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Array to store usernames
let usernames = [];

// Route to display the form for entering username
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle form submission and display usernames
app.post('/users', (req, res) => {
    const username = req.body.username;
    usernames.push(username);
    res.render('users', { usernames });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
