const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'FirstName is Required']
    },
    lastname: {
        type: String,
        required: [true, 'LastName is Required']
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is Required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    },
    DOB: {
        type:String
    },
    token: {
        type: String
    },
    profilePicture:{
        type:String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    islogin: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    bookmarks: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Ticket' 
    }],
    myEventsLink: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"event"
    }],
    myticketsLink: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ticket"
    }],
}, {timestamps: true});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel