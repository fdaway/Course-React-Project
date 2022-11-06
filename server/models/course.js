const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    title: String,
    userID: Number
}, { timestamps: true } )

const Course = mongoose.model('Course', courseSchema)

module.exports = Course
