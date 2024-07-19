const Student = require('../models/Student');

function rollCall() {
    return Student.aggregate([
        { $sample: { size: 1 } }
    ]);
}

module.exports = rollCall;