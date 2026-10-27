// Import the express module
import express from 'express';

const app = express();

app.use(express.static('public'));

const PORT = 3005;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
});

// Confirm route
app.post('/confirm-vac', (req, res) => {

    res.sendFile(`${import.meta.dirname}/views/thank_page.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});