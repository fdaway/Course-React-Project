import './App.css'
import Login from './pages/login'
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
            "email": "",
            "activeID": 1,
            "completedLessons": [1,2,3],
        }
    )
      
    useEffect(() => {
        Axios.get("http://localhost:3001/api").then((response) => {
            setLessons(response.data)
        })
        Axios.get("http://localhost:3001/api/session").then((responsee) => {
            let sessionData = responsee.data[0]
            setSession((prev) => ({
                ...prev, 
                activeID: sessionData.activeID,
                completedLessons: sessionData.completedLessons.split("-").map(str => Number(str))
            }))
        })
    }, [])

 
       
        useEffect(() => {
            const activeID = session.activeID
            const completedLessons = session.completedLessons.join("-")
            Axios.post("http://localhost:3001/api/update", {
                activeID: activeID,
                completedLessons: completedLessons
            })
        }, [session.activeID, session.completedLessons])



 
    let current = session.activeID

    const handleSignIn = (email) => {
        setSession((prev) => ({
            ...prev, 
            isLogged: true,
            email: email
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
          
            <Header lessons={lessons} session={session} handleSignIn={handleSignIn} />
            <Routes>
            <Route path="/" element={<Lessons lessons={lessons} session={session} clickLesson={clickLesson} markComplete={markComplete} 
            markUnComplete={markUnComplete} current={current} increment={increment} decrement={decrement} />}  />
            <Route path="/start" element={<Start />}  />
            <Route path="/login" element={<Login />}  />
            <Route path="/contacts" element={<Contacts />}  />
            <Route path="/finish" element={<Finish />}  />
            </Routes>
            <Footer /> 
      </div> 
  );
}

export default App
