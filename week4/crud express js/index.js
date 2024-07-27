import express from "express";
import userRoutes from "./routes/users.js";
// take incoming post request and parse it into a json object
import bodyParser from "body-parser";
const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get("/", (req, res) => {
    console.log("This is a get request");
   res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


