require("dotenv").config();
var nodemailer = require("nodemailer");
const mailsource = process.env.MAIL_FROM || "example@gmail.com";
const mailkey = process.env.MAIL_KEY || "somefillerpassword";
module.exports = function sendmail(args) {
    let mailOptions = { from: mailsource, ...args };
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: mailsource,
            pass: mailkey,
        },
    });
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("mail sent");
        }
    });
};
