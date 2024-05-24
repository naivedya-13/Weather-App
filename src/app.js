const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// Paths

const static_path = path.join(__dirname,"../public");
const template_path = path.resolve(__dirname,"../templates/views");

const partials_path = path.resolve(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

// Middleware to serve static files
app.use(express.static(static_path));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.get('*', (req, res) => {
    res.render('404error',{
        errorMsg:"Opps!! Page Not Found"
    })
});

// Start server
app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
