const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Student Schema
const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = Student = mongoose.model('student', StudentSchema);