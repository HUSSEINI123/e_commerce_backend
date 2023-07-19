const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

// app.use("/", (req, res) => 
// {
//   res.send("Hello i am sserver 5000");
// });


app.use("/api/user", authRouter);


app.use(notFound)
app.use(errorHandler)
app.get("/", (req, res) => {
    res.send("Hello from the server");
  });
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});