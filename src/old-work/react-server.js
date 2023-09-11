/* eslint-disable no-undef */
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Set the port number

const builtFolder = "../../server-dist";

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, builtFolder)));

// Handle all other requests by serving the React app's HTML file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, builtFolder, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
