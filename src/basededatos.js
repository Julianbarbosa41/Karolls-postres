const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/Productosdb', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})
 .then((db) => console.log("base de batos conectada"))
 .catch((err) => console.error(err));
 
