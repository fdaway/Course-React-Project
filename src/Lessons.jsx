import LessonCard from './LessonCard'
import VideoPlayer from './videoPlayer'
import { FaCheck, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react';
const  Lessons  = ({ lessons, session, clickLesson, markComplete, markUnComplete, increment, decrement, toggleSideBar, handleSignIn}) => {
    useEffect(() => {
        const google = window.google
        google.accounts.id.initialize({
          client_id: "1023936046196-c55n0ke1qm3goi70ih1khh0hoaqqo1gu.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        
        google.accounts.id.renderButton(
          document.getElementById("ggDiv"),
          { theme: "outline", size: "medium" }  
        )}, [session.activeID])
        function handleCredentialResponse(response) {
          let identity = jwt_decode(response.credential)
          handleSignIn(identity)
        }
 
    return <div className="ContentContainer">
        <div className="Cards" style={ session.sideBar ? {} : { display: 'none'}}>
        {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} session={session}
        clickLesson={clickLesson} /> 
        ))}
        </div>
       

        <div className="LessonsPage" style={ session.sideBar ? {} : { margin: '0', border: 'none', borderTop: '21px solid #c4e2f7', boxShadow: 'none'}}>
        <div className="toggleSideBar" onClick={toggleSideBar} style={ session.sideBar ? {} : { marginRight: '3px', }}><div className="toggleSidebarInner"></div></div>

        {lessons[session.activeID-1].isLocked && !session.isLogged ?
            <div className="Lock">
                <FaLock className="LockBigIcon" />
                <Link to="login"><div><h3 style={{marginBottom: '0.25rem'}}>Sign in to view the lesson</h3></div></Link>
                <div id="ggDiv"   
                  data-client_id="1023936046196-c55n0ke1qm3goi70ih1khh0hoaqqo1gu.apps.googleusercontent.com"
                  data-auto_select="true"
                  data-login_uri="https://thecourses.online/"  
                  >
                </div>
                
            </div>
            :
            <VideoPlayer lessons={lessons} session={session} markComplete={markComplete} />
            }
            <div className="LessonContainer">  
            {lessons.map((lesson) => (   
                lesson.id === session.activeID ? 
                <h1 key={lesson.id}>{lesson.id}. {lesson.title}</h1> 
                : null
                ))}
        

            <div className="LessonNav">
            <button className="ButtonGrey" 
            style={session.activeID === 1 ? displayNone : { } }
            onClick={decrement}
            >⬅</button>

           {lessons[session.activeID-1].isLocked && !session.isLogged ?
            <p></p>
            :
           
            <div>
            <button className="ButtonBlue Complete"
            style={session.completedLessons.includes(session.activeID) ? displayNone : {}}
            onClick={markComplete}> 
            <FaCheck className="CompleteIcon" /> {'Mark Complete'} </button>  
            <button className="ButtonBlue Complete"
            style={ session.completedLessons.includes(session.activeID) ? {} : displayNone}
            onClick={markUnComplete}>
            {'Mark as not complete'}</button>
            </div>
        }
            <button className="ButtonGrey" 
            style={session.activeID===lessons.length ? displayNone : { } }
            onClick={increment}
            >➡</button>
           
           
         

            </div>
            </div>
            </div>
        
            
        </div>
       
        }
        
const displayNone = {display: 'none'}
export default Lessons
