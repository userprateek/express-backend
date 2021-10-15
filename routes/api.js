const router = require("express").Router();
let Messages = require("../models/message.model");
const mailer = require("./mailer");
const mailsource = process.env.MAIL_FROM;
require("dotenv").config();
router.route("/").get((req, res) => {
    res.json("working");
});
router.route("/sendmail").post((req, res) => {
    Messages.find({ email: req.body.email })
        .then((messages) => {
            console.log(messages, messages.length);
            if (messages.length === 0) {
                const mailto = mailsource;
                const mailsubject = `mail for prateekkumar.net from ${req.body.name}`;
                const mailtext = req.body.text;
                const mailhtml = `<ul><li>Name :${req.body.name}</li><li>Phone: ${req.body.phone}</li></ul><p>Message:${req.body.message}</p>`;
                const contactmail = {
                    to: mailto,
                    subject: mailsubject,
                    text: mailtext,
                    html: mailhtml,
                };
                const guestname = req.body.name || "Guest";
                const replyhtml = `<h1>Hello ${guestname}</h1> <p>Thanks for contacting prateekkumar.net, you will hear from us soon.</p>`;
                const replymail = {
                    to: req.body.email,
                    subject: "reply from prateekkumar.net",
                    text: "Thanks for contacting prateekkumar.net, you will hear from us soon.",
                    html: replyhtml,
                };
                try {
                    mailer(contactmail);
                    mailer(replymail);
                } catch (err) {
                    res.status(400).json("Error: " + err);
                }
                const name = req.body.name;
                const email = req.body.email;
                const phone = req.body.phone;
                const message = req.body.message;
                const newMessages = new Messages({
                    name,
                    email,
                    phone,
                    message,
                });
                newMessages
                    .save()
                    .then(() => res.json("message sent"))
                    .catch((err) => res.status(400).json("Error: " + err));
            } else {
                res.json("you already submitted contact requested");
            }
        })
        .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/contactrequst").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const newMessages = new Messages({ name, email, phone, message });

    newMessages
        .save()
        .then(() => res.json("message sent"))
        .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
