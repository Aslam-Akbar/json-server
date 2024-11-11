const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors"); // Import cors

const app = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(cors()); // Enable CORS for all routes
app.use(middlewares);
app.use("/api", router);

const port = process.env.PORT || 10000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
