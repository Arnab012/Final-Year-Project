const app = require("./app");

const dotenv = require("dotenv");

const connectToMOngo = require("./config/db");

dotenv.config();

connectToMOngo();
app.listen(process.env.PORT, () => {
  console.log(`server is workung on http://localhost:${process.env.PORT}`);
});
