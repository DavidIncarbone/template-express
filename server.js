import express from "express";

//Other imports
import errorsHandler from "./middlewares/errorsHandler.js";
import notFound from "./middlewares/notFound.js";
import cors from "cors";
import examplesRouter from "./routes/examples.js";
// create a server instance
const app = express();

// set costant to port
const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.use(cors({
  origin: "localhost: http://localhost:5173"
}));

// registro il body-parser per "application/json"
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

//other routes
app.use("/api/examples", examplesRouter);

app.use(errorsHandler);

app.use(notFound);

//server must listen on your host and your port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
