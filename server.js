const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const { connectiondb } = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const app = express();
connectiondb();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
