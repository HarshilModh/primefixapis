const expreess = require("express");
const app = expreess();
const mongooose = require("mongoose");
const apiRoutes = require("./api-routes");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(expreess.json());
app.use(expreess.urlencoded({ extended: true }));
app.use(cors());

mongooose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.use("/api", apiRoutes);
app.listen(process.env.PORT ||3000, () => {
  console.log("server is running on port 3000");
});
