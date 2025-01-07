const express = require("express");
const cors = require("cors");

// Create a server instance
const app = express();

// Set constant to port
const port = process.env.PORT || 3000;


// Other imports
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
const router = require("./routers/exampleRouter");



app.use(express.static("public"));

app.use(cors({
    origin: `localhost : http://localhost:5174/`
}));


app.get("/", (req, res) => {
    res.send("Home Page")
});


// Other routes

app.use("/examples", router);


app.use(errorsHandler);


app.use(notFound);



//  server must listen on your host and your port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
