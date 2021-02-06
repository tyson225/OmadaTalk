const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    pasword: String,
    email: String,
    createdAt: String
});

module.exports = model('User', userSchema);