const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
        host: '162.241.225.138',
        user: 'diabeuf7_agent',
        password: 'E!YQ]E.vBo[2',
        database: 'diabeuf7_course-state'
    });

const dbs = mysql.createPool({
        host: '162.241.225.138',
        user: 'diabeuf7_agent',
        password: 'E!YQ]E.vBo[2',
        database: 'diabeuf7_sessions'
    });    

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/api', (req, res) => {
    const sqlSelect = "SELECT * FROM state_data"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get('/api/session', (req, res) => {
    const sqlSelect = "SELECT * FROM sessions WHERE id='0'" //default progress id
    dbs.query(sqlSelect, (err, resulte) => {
        res.send(resulte);
    })
})

app.post("/api/update", (req, res) => {
    var activeID = req.body.activeID
    var completedLessons = req.body.completedLessons
    var email = req.body.email
    const sqlInsert = "UPDATE diabeuf7_sessions.sessions SET activeID='?', completedLessons=? WHERE email=? ";
    db.query(sqlInsert, [activeID, completedLessons, email], (err, resultp) => {
        console.log(resultp)
    });
})

app.listen(3001, () => {
    console.log("Server Started")
})