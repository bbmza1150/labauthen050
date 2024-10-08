const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String ,required: true},
    password: {type: String , required: true},
    name :{ type: String ,required: false},
    role: {type: String , required:false},
});

module.exports = mongoose.model('User', userSchema);