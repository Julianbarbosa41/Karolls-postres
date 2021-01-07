const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");

//inicilizaciones
const app = express();
require("./basededatos");

//configuracion
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "karolls",
    resave: true,
    saveUninitialized: true,
  })
);

//variables globales

//routes
app.use(require("./routes/index"));
app.use(require("./routes/productos.js"));
app.use(require("./routes/user.js"));

//archivos estaticos
app.use(express.static(path.join(__dirname, "plublic")));

//el servidor esta listo
app.listen(app.get("port"), () =>
  console.log("Servidor en puerto", app.get("port"))
);
