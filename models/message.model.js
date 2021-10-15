const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            unique: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        message: {
            type: Object,
            trim: false,
        },
    },
    {
        timestamps: true,
    }
);

const messages = mongoose.model("messages", messageSchema);

module.exports = messages;
