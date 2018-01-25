const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getCurrentYear',() => {
return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text) => {
return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear()
    });
});


app.get('/about', (req, res) => {
    // res.send(`It is Mr Han's webApp`);
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});
app.get('/bad-request', (req,res) => {
    res.send({
        statusCode: 404,
        errorMessage: 'Bad Request'
    })
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});