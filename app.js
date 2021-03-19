require("./config/config");
require("./models/db");

const express = require("express");

const cors = require("cors");

const rtsIndex = require("./routes/index.router");
var app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use("/api/v1", rtsIndex);

// error handler
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    var valErrors = [];
    Object.keys(err.errors).forEach((key) =>
      valErrors.push(err.errors[key].message)
    );
    res.status(200).send(valErrors);
  } else {
    console.log(err);
  }
});

// start server
app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started at port : ${process.env.PORT}`)
);
