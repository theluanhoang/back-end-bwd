const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Room2 = new Schema({
    Data: {type: Array},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Room2', Room2);

