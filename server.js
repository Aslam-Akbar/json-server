const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Make sure db.json is in the same directory
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 4000; // Render provides the PORT environment variable

app.use(middlewares);
app.use('/api', router); // Access your JSON server API at /api

app.get('/', (req, res) => {
  res.send('Hello from JSON Server on Render!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
