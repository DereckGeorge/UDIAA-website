const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001; // You can use any available port

app.use(cors());

// MySQL database configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Add your MySQL password
  database: 'events', // Add your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// API endpoint to get events
app.get('/api/events', (req, res) => {
  const query = 'SELECT * FROM events_data'; // Replace 'events' with your actual table name
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
