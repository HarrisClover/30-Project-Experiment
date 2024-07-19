const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const rollCall = require('../utilities/roll-call');

router.post('/', (req, res) => {
    Student.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.status(500).json(err));
});

router.get('/', (req, res) => {
    Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(500).json(err));
});

router.get('/roll-call', (req, res) => {
    rollCall()
        .then(student => res.json(student))
        .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({message: 'Student updated successfully'}))
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id)
    .then(() => res.json({message: 'Student deleted successfully'}))
    .catch(err => res.status(500).json(err));
});

module.exports = router;