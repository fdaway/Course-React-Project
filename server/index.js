const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
        host: '162.241.225.138',
        user: 'diabeuf7_agent',
        password: 'E!YQ]E.vBo[2',
        database: 'diabeuf7_course'
    });

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/api/lessons/get', (req, res) => {
    const sqlSelect = "SELECT * FROM lessons"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get('/api/sessions/get', (req, res) => {
    var email = req.query.email
    const sqlSelect = "SELECT * FROM sessions WHERE email=?"  
    db.query(sqlSelect, [ email ], (err, resulte) => {
        res.send(resulte);
    })
})

app.post("/api/sessions/update", (req, res) => {
    var activeID = req.body.activeID
    var completedLessons = req.body.completedLessons
    var email = req.body.email
    var id = req.body.id
    const sqlInsert = "INSERT INTO sessions (id, email, completedLessons, activeID) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE email=?, completedLessons=?, activeID=?";
    db.query(sqlInsert, [id, email, completedLessons, activeID, email, completedLessons, activeID], (err, resultp) => {
        console.log(resultp)
    });
})

app.listen(3001, () => {
    console.log("Server Started")
})