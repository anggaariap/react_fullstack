const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'widatech_test_db'
});

app.post('/api/invoices', (req, res) => {
  const { date, customerName, salespersonName, notes, products } = req.body;
  const query = 'INSERT INTO invoices (date, customer_name, salesperson_name, notes, products) VALUES (?, ?, ?, ?, ?)';
  db.execute(query, [date, customerName, salespersonName, notes, JSON.stringify(products)], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Invoice saved successfully' });
  });
});

app.get('/api/invoices', (req, res) => {
  const { page } = req.query;
  const offset = (page - 1) * 10;
  const query = 'SELECT * FROM invoices LIMIT 10 OFFSET ?';
  db.execute(query, [offset], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
});

app.get('/api/revenue', (req, res) => {
  const { period } = req.query;
  // Implement logic to fetch revenue data based on the period
  res.status(200).json({ message: 'Revenue data' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});