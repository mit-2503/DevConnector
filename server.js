//Install following packages
//npm install express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
//npm i -D nodemon concurrently
//npm install -g nodemon --save-dev

const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

connectDB();

//Init middleware, allows to get data from req to users route

app.use(express.json({ extended: false }));

//Define Routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//Serve static assets in production

if (process.env.NODE_ENV === "production") {
  //Set static folder

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Api Running");
// });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
