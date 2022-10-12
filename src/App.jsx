import './App.css'
import Login from './pages/login'
import Cabinet from './pages/cabinet'
import Start from './pages/start'
import PrivacyPolicy from './pages/privacy-policy'
import Finish from './pages/finish'
import Contacts from './pages/contacts'
import Creator from './pages/creator'
import Header from './Header'
import Footer from './Footer'
import Lessons from './Lessons.jsx'
import Course from "./pages/course"
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
            "sideBar": true,
            'id': ''
        }
    )


    useEffect(() => {
        Axios.get("http://localhost:3001/api/lessons/get").then((response) => {
            setLessons(response.data)
        })
    }, [])

    useEffect (() => {
        Axios.get("http://localhost:3001/api/sessions/get",  {
            params: {
                email: session.email
            }
        }).then((responsee) => {
            responsee.data.length !== 0 &&
            setSession((prev) => ({
                ...prev, 
                activeID: responsee.data[0].activeID,
                completedLessons: responsee.data[0].completedLessons.split("-").map(str => Number(str)),
                id: responsee.data[0].id
            }))
           
        })
    }, [session.email])

    useEffect ( () => {
        if(session.email !== "guest" && session.isLogged && session.completedLessons !== [0]){
            var activeID = session.activeID
            var completedLessons = session.completedLessons.join("-")
            var email = session.email
            var id = session.userID      
            Axios.post("http://localhost:3001/api/sessions/update", {
            activeID: activeID,
            completedLessons: completedLessons,
            email: email,
            id: id
            })
        }
    }, [session.activeID, session.completedLessons]) 
     
    let current = session.activeID

    const handleSignIn = (identity) => {
        setSession((prev) => ({
            ...prev, 
            isLogged: true,
            email: identity.email,
            name: identity.name,
            avatar: identity.picture,
            userGID: identity.sub,
            userID: parseInt(identity.sub.slice(9,21))
        }))
    }
    const handleLogOut = () => {
        setSession((prev) => ({
            ...prev, 
            isLogged: false,
            email: 'guest',
            activeID: 1,
            completedLessons: [0],
            name: "",
            avatar: ""
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
        session.activeID !== lessons.length && increment()
    } 
    
    const markUnComplete = () => {
        setSession(prev => ({
            ...prev,
            completedLessons:  prev.completedLessons.filter(e => e !== current)
            }))
        } 
    const toggleSideBar = () => {
        setSession(prev => ({
            ...prev,
            sideBar: !session.sideBar
        }))
    }

    // Creator
    const [creation, setCreation] = useState({
        hasCourse: false,
        creatingTitle: false,
        addingLesson: false,
        courseTitle: 'The Cosmic Revolution'
    })
    const [creatorLessons, setCreatorLessons] = useState()

    const handleSubmit = (event) => {
        addCourse()
        event.preventDefault()
        setCreation((prev) => ({
            ...prev,
            hasCourse: true
        }))
    }
    const handleTitleChange = (event) => {
        setCreation((prev) => ({
            ...prev,
            courseTitle: event.target.value
        }))
    }
    const addCourse = () => {
        setCreation((prev) => ({
            ...prev, creatingTitle: !creation.creatingTitle,  
        }))
    }
    const addLesson = () => {
        setCreation((prev) => ({
            ...prev, addingLesson: !creation.addingLesson,  
        }))
    }

  return (
        <div className="App" >
            <Header lessons={lessons} session={session} handleSignIn={handleSignIn} handleLogOut={handleLogOut} toggleSideBar={toggleSideBar}/>
            <Routes>
            <Route index element={<Lessons lessons={lessons} session={session} clickLesson={clickLesson} markComplete={markComplete} 
            markUnComplete={markUnComplete} current={current} increment={increment} decrement={decrement} toggleSideBar={toggleSideBar} handleSignIn={handleSignIn}/>}  />
            <Route path="start" element={<Start />}  />
            <Route path="login" element={<Login />} />
            <Route path="creator" element={<Creator creation={creation} lessons={lessons} session={session} handleSubmit={handleSubmit}
            handleTitleChange={handleTitleChange} addCourse={addCourse} />} />
            <Route path="course" element={<Course creation={creation} lessons={lessons} session={session} clickLesson={clickLesson} addLesson={addLesson} />}/>
            <Route path="cabinet" element={<Cabinet session={session} handleLogOut={handleLogOut}/>}/>
            <Route path="contacts" element={<Contacts />}   />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="finish" element={<Finish />}  />
            </Routes>
            <Footer lessons={lessons} session={session}/> 
      </div> 
  );
}

export default App
