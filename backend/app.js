const express = require('express');
const morgan = require('morgan');     //logs all our shit
const cors = require('cors');         //cross-origin-resource-sharing
const csrf = require('csurf');       //protection on forms
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { environment } = require("./config");
const app = express();
const isProduction = environment === "production"
const routes = require("./routes")
const { ValidationError } = require('sequelize');

app.use(morgan("dev"))
app.use(cookieParser())
app.use(express.json());


if (!isProduction) {
  app.use(cors())
}

app.use(helmet({
  contentSecurityPolicy: false
}))

// app.use(
//   csrf({
//     cookie: {
//       secure: isProduction,
//       sameSite: isProduction && "Lax",
//       httpOnly: true,
//     },
//   })
// )


app.use(routes);


// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

//processes errors in sequelize
app.use((err, _req, _res, next) => {

  //checks to see if error is a sequelize error
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
})

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  })
})





module.exports = app;
