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
            "isActive": true,
            "isComplete": false
        },
        {
            "id": 2,
            "title": "3 course goals and timing",
            "duration": "5min 22s",
            "isActive": false,
            "isComplete": false
        },
        {
            "id": 3,
            "title": "Placeholder",
            "duration": "3min 22s",
            "isActive": false,
            "isComplete": false
        },
        {
            "id": 4,
            "title": "Using State",
            "duration": "12min 36s",
            "isActive": false,
            "isComplete": false
        },
        {
            "id": 5,
            "title": "Combining methods into a single multisteps",
            "duration": "5min 22s",
            "isActive": false,
            "isComplete": false
        },
        {
            "id": 6,
            "title": "Sign-in form with oAuth",
            "duration": "4min 11s",
            "isActive": false,
            "isComplete": false
        }
 
    ])

    useEffect(() => {
        Axios.get("http://localhost:3001/api").then((response) => {
            setLessons(response.data)
        })
    }, [])

    let current = 0
    lessons.map((lesson) => {
        if(lesson.isActive) current = lesson.id
        return current  
    })
    
    const increment = () => {     
        current++
        clickLesson(current)
    }
    const decrement = () => {
       current--
       clickLesson(current)
    }

    const clickLesson = (id) => {  
        setLessons([...lessons].map(object => {
            if(object.id === id) {
                return {
                    ...object, 
                    isActive: 1
                }
            }
            else return {
                    ...object, 
                    isActive: 0
                }
       }))
    }
 
    const markComplete = () => {  
        setLessons([...lessons].map(object => {
            if(object.id === current) {
                return {
                    ...object,
                    isComplete: 1
                   }
                }
                else return object 
        }))
    } 

    const markUnComplete = () => {
        setLessons([...lessons].map(object => {
            if(object.id === current) {
                return {
                    ...object,
                    isComplete: 0
                   }
                }
                else return object
        }))
    }


  return (
  
      <div className="App">
        <Header lessons={lessons}/>
        <Routes>
        <Route path="/" element={<Lessons lessons={lessons} clickLesson={clickLesson} markComplete={markComplete} 
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
