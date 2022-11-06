const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const mongoose = require('mongoose')
const Course = require('./models/course')
// const { isCompositeComponent } = require('react-dom/test-utils')

const db = mysql.createPool({
        host: '162.241.225.138',
        user: 'diabeuf7_agent',
        password: 'E!YQ]E.vBo[2',
        database: 'diabeuf7_course'
    });
const mdb = 'mongodb+srv://mongo_manager:almost2advanced@courses.edxm7v4.mongodb.net/creations?retryWrites=true&w=majority'
mongoose
    .connect(mdb)
    .then((res) => app.listen(8080, '127.0.0.1'))
    .catch((error) => console.log(error))

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))


app.post('/api/courses/add', (req, res) => {
    var title = req.body.title
    var userID = req.body.userID
    const course = new Course({
        title: title,
        userID: userID
    })
    course.save()
        .then((result) =>{
            res.send(result)
        })
        .catch((err) => {
            console.log("Backend Error: ", err)
        })
    return;
})

app.get('/', (req, res) => {
    res.send("Server is running")
})
 
app.get('/api/lessons/get', (req, res) => {
    const sqlSelect = "SELECT * FROM lessons"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get('/api/sessions/get', (req, res) => {
    var email = req.query.email
    const sqlSelect = "SELECT * FROM sessions WHERE email=?"  
    db.query(sqlSelect, [ email ], (err, result) => {
        res.send(result);
    })
})

app.post("/api/sessions/update", (req, res) => {
    var activeID = req.body.activeID
    var completedLessons = req.body.completedLessons
    var email = req.body.email
    var id = req.body.id
    const sqlInsert = "INSERT INTO sessions (id, email, completedLessons, activeID) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE email=?, completedLessons=?, activeID=?";
    db.query(sqlInsert, [id, email, completedLessons, activeID, email, completedLessons, activeID], (err, result) => {
        console.log(result)
    });
})

 
 