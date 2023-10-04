const mongoose = require("mongoose");

const connecttoMongo = () => {
  mongoose.connect(process.env.db_uri, { dbName: "HealthCAre" }).then((data) => {
    console.log(`DataBase connected Sucessfully  with ${data.connection.host}`);
  });
};
module.exports = connecttoMongo;