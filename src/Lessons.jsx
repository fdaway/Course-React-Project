import LessonCard from './LessonCard.jsx'
import { FaCheck, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'; 
 
 
const  Lessons  = ({ lessons, session, clickLesson, markComplete, markUnComplete, increment, decrement, toggleSideBar, handleSignIn }) => {
 
    return <div className="ContentContainer">
        <div className="Cards" style={ session.sideBar ? {marginLeft: '0px', transition: '.3s'} : { marginLeft: '-288px', transition: '.7s'}}>
        {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} session={session}
        clickLesson={clickLesson} /> 
        ))}
        </div>
       

        <div className="LessonsPage">
        <div className="toggleSideBar" onClick={toggleSideBar}><div className="toggleSidebarInner"></div></div>

        {lessons[session.activeID-1].isLocked && !session.isLogged ?
            <div className="Lock">
                <FaLock className="LockBigIcon" />
                
                <Link to="login"><div><h3>Sign in to view the lesson</h3></div></Link>
                
                
            </div>
            :
            <div> </div>
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
