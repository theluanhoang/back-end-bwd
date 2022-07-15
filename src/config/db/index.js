const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(`mongodb+srv://luantrum27:htl27062003@tc-covid.evjlnjx.mongodb.net/tc-covid?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Successfully!');
    } catch (error) {
        console.log('Connect Failure!');
    }
}

module.exports = { connect };
