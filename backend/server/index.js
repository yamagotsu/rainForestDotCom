const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });
const pool = require('./db_config');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

//read all men products
app.get('/men', async (req, res) => {
    let mensData = await pool.query(
        "SELECT * FROM products WHERE category = 'men';"
    );
    res.set('content-type', 'application/json');
    res.status(200)
    res.end(JSON.stringify(mensData.rows))
});

//read all women products
app.get('/women', async (req, res) => {
    let womensData = await pool.query(
        "SELECT * FROM products WHERE category = 'women';"
    );
    res.set('content-type', 'application/json');
    res.status(200)
    res.end(JSON.stringify(womensData.rows))
})

//read all kids data
app.get('/kids', async (req, res) => {
    let kidsData = await pool.query(
        "SELECT * FROM products WHERE category = 'kids';"
    );
    res.set('content-type', 'application/json');
    res.status(200)
    res.end(JSON.stringify(kidsData.rows))
})

//read all accessories data
app.get('/accessories', async (req, res) => {
    let accessoriesData = await pool.query(
        "SELECT * FROM products WHERE category = 'accessories';"
    );
    res.set('content-type', 'application/json');
    res.status(200)
    res.end(JSON.stringify(accessoriesData.rows))
})

//read all jewelry data
app.get('/jewelry', async (req, res) => {
    let jewelryData = await pool.query(
        "SELECT * FROM products WHERE category = 'jewelry';"
    );
    res.set('content-type', 'application/json');
    res.status(200)
    res.end(JSON.stringify(jewelryData.rows))
})

app.listen(port, () => console.log(`Server is running on port ${port}`));