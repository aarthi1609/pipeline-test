const express = require('express');
const app = express();
const port = process.env.PORT;

// Home route
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to my app');
});

// Route for /admin to test Nginx restriction
app.get('/admin', (req, res) => {
  res.send('This is the admin page');
});

// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

