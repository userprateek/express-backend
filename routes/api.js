const router = require("express").Router();
let Messages = require("../models/message.model");
router.route("/").get((req, res) => {
	Messages.find()
		.then((messages) => res.json(messages))
		.catch((err) => res.status(400).json("Error: " + err));
});
router.route("/contactrequst").post((req, res) => {
	console.log(req.body);
	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const message = req.body.message;
	const newMessages = new Messages({ name, email, phone, message });

	newMessages
		.save()
		.then(() => res.json("Profile added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
