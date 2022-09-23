import './App.css'
import Login from './pages/login'
import Cabinet from './pages/cabinet'
import Start from './pages/start'
import Finish from './pages/finish'
import Contacts from './pages/contacts'
import Header from './Header'
import Footer from './Footer'
import Lessons from './Lessons.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Axios from 'axios'
const App = () => {
    const [lessons, setLessons] = useState([
        {
            "id": 1,
            "title": "Course Overeview",
            "duration": "12min 36s",
        },
        {
            "id": 2,
            "title": "3 course goals and timing",
            "duration": "5min 22s",
        },
        {
            "id": 3,
            "title": "Placeholder",
            "duration": "3min 22s",
        },
        {
            "id": 4,
            "title": "Using State",
            "duration": "12min 36s",
        },
        {
            "id": 5,
            "title": "Combining methods into a single multisteps",
            "duration": "5min 22s",
        },
        {
            "id": 6,
            "title": "Sign-in form with oAuth",
            "duration": "4min 11s",
        }
 
    ])

    const [session, setSession] = useState (
        {   
            "isLogged": false,
            "email": 'guest',
            "activeID": 1,
            "completedLessons": [0],
        }
    )

    useEffect(() => {
        Axios.get("http://localhost:3001/api").then((response) => {
            setLessons(response.data)
        })
        Axios.get("http://localhost:3001/api/session", {
            params: {
                email: 'guest'
            }
        }).then((responsee) => {
             
            let sessionData = responsee.data[0]
            console.log(sessionData)
            setSession((prev) => ({
                ...prev, 
                activeID: sessionData.activeID,
                completedLessons: sessionData.completedLessons.split("-").map(str => Number(str))
            }))
        })
    }
    , [])

    useEffect (() => {
        Axios.get("http://localhost:3001/api/session",  {
            params: {
                email: session.email
            }
        }).then((responsee) => {
            let sessionData = responsee.data[0]
            setSession((prev) => ({
                ...prev, 
                activeID: sessionData.activeID,
                completedLessons: sessionData.completedLessons.split("-").map(str => Number(str))
            }))
        }, [session.email])
    }, [session.email])

    const updateSession = () => { 
        var activeID = session.activeID
        var completedLessons = session.completedLessons.join("-")
        var email = session.email
        Axios.post("http://localhost:3001/api/update", {
            activeID: activeID,
            completedLessons: completedLessons,
            email: email
        })
    }
        
    let current = session.activeID

    const handleSignIn = (email) => {
        setSession((prev) => ({
            ...prev, 
            isLogged: true,
            email: email
        }))
    }
    const handleLogOut = () => {
        setSession((prev) => ({
            ...prev, 
            email: 'guest'
        }))
    }
    const increment = () => {     
        current++
        clickLesson(current)
    }
    const decrement = () => {
       current--
       clickLesson(current)
    }

    const clickLesson = (id) => {
        setSession((prev) => ({
            ...prev, 
            activeID: id
        }))
    }

    const markComplete = () => {  
        setSession(prev => ({
        ...prev,
        completedLessons:  [...prev.completedLessons, session.activeID]
        }))
    } 
    
    const markUnComplete = () => {
        setSession(prev => ({
            ...prev,
            completedLessons:  prev.completedLessons.filter(e => e !== current)
            }))
        } 

  return (
        <div className="App">
            <p onClick={updateSession} style={{cursor: 'pointer', borderRadius: '3px', background: '#f1f1f1', padding: '.3rem', position: 'absolute', margin: '.2rem', top: '40%'}}>Update</p>
            <Header lessons={lessons} session={session} handleSignIn={handleSignIn} handleLogOut={handleLogOut}/>
            <Routes>
            <Route path="/" element={<Lessons lessons={lessons} session={session} clickLesson={clickLesson} markComplete={markComplete} 
            markUnComplete={markUnComplete} current={current} increment={increment} decrement={decrement} />}  />
            <Route path="/start" element={<Start />}  />
            <Route path="/login" element={<Login />} />
            <Route path="/cabinet" element={<Cabinet session={session}/>}   />
            <Route path="/contacts" element={<Contacts />}   />
            <Route path="/finish" element={<Finish />}  />
            </Routes>
            <Footer /> 
      </div> 
  );
}

export default App
