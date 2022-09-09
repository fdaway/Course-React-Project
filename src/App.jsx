import './App.css'
import Login from './pages/login'
import Start from './pages/start'
import Finish from './pages/finish'
import Contacts from './pages/contacts'
import Header from './Header'
import Footer from './Footer'
import Lessons from './Lessons.jsx'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
const App = () => {
    const [lessons, setLessons] = useState([
        {
            "id": 1,
            "title": "Course Overeview",
            "duration": "12min 36s",
            "type": "🎥",
            "isActive": false,
            "isComplete": false
        },
        {
            "id": 2,
            "title": "3 course goals and timing",
            "duration": "5min 22s",
            "type": "🎥",
            "isActive": true,
            "isComplete": false
        },
        {
            "id": 3,
            "title": "About me",
            "duration": "3min 22s",
            "type": "🎥",
            "isActive": false,
            "isComplete": false
        },
        {
            "id": 4,
            "title": "3 Study based approaches ranked by efficiency",
            "duration": "12min 36s",
            "type": "🎥",
            "isActive": false,
            "isComplete": false
        },
        {
            "id": 5,
            "title": "Combining methods into a single multisteps strategy",
            "duration": "5min 22s",
            "type": "🎥",
            "isActive": false,
            "isComplete": false
        },
        {
            "id": 6,
            "title": "Hb1Ac as a main indicator: pre and after course tests",
            "duration": "4min 11s",
            "type": "🎥",
            "isActive": false,
            "isComplete": false
        },
        {
            "id": 7,
            "title": "Continuous glucose monitoring (CGM)",
            "duration": "2min 10s",
            "type": "🎥",
            "isActive": false,
            "isComplete": false
        }
    ])
    const [current, setCurrent] = useState (1)
    const [progress, setProgress] = useState (0)
    const clickLesson = (id) => {
        setCurrent(id)
    }
    const increment = () => {    // lesson
        setCurrent(current + 1)
    }
    const decrement = () => {
       setCurrent(current - 1) 
    }

    const incrementProgress = () => {
        setProgress(progress + 100 / lessons.length)
    }
    const decrementProgress = () => {
        setProgress(progress - 100 / lessons.length)
    }
    const markComplete = () => {  //lesson
        setLessons([...lessons].map(object => {
            if(object.id === current) {
                return {
                    ...object,
                    isComplete: true
                   }
                }
                else return object 
        }))
        if(current !== lessons.length)setCurrent(current + 1)
        incrementProgress()
    }
    const markUnComplete = () => {
        decrementProgress() 
        setLessons([...lessons].map(object => {
            if(object.id === current) {
                return {
                    ...object,
                    isComplete: false
                   }
                }
                else return object
        }))
    }
    const finish = () => {
        setLessons([...lessons].map(object => {
            if(object.id === current) {
                return {
                    ...object,
                    isComplete: true
                   }
                }
                else return object
        }))
    }
   

  return (
   
      <div className="App">
        <Header  progress={progress}/>
        <Routes>
        <Route path="/" element={<Lessons lessons={lessons} clickLesson={clickLesson} markComplete={markComplete} 
        markUnComplete={markUnComplete} current={current} increment={increment} decrement={decrement} progress={progress} finish={finish}/>}  />
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
