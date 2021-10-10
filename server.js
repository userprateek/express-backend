const express = require("express");
const compression = require("compression");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv").config();

const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

const shouldCompress = (req, res) => {
	if (req.headers["x-no-compression"]) {
		return false;
	}
	return compression.filter(req, res);
};
app.use(
	compression({
		filter: shouldCompress,
		threshold: 0,
	})
);
app.use(express.static(path.join(__dirname, "./jsapp/build")));
//const exercisesRouter = require('./routes/exercises');
const usersRouter = require("./routes/user");
const profileRouter = require("./routes/profiledata");
const apiRouter = require("./routes/api");

app.use("/profiledata", profileRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./jsapp/build", "index.html"));
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
