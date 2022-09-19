import LessonCard from './LessonCard.jsx'
// import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const  Lessons  = ({ lessons, session, clickLesson, markComplete, markUnComplete, increment, decrement, current }) => {
    
    return <div className="ContentContainer">

<div className="Cards">
{lessons.map((lesson) => (
<LessonCard key={lesson.id} lesson={lesson} session={session}
clickLesson={clickLesson} /> 
))}
</div>
 
<div className="LessonsPage">
 {/* <div style={{position: 'relative', width: '100%', height: '500px' }}>
 <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GLSr0BAlndM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div> */}

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

<button className="ButtonBlue Complete"
style={session.completedLessons.includes(session.activeID) ? displayNone : {}}
onClick={markComplete}>
<FaCheck className="CompleteIcon" /> {'Mark Complete'} </button>

<button className="ButtonBlue Complete"
style={ session.completedLessons.includes(session.activeID) ? {} : displayNone}
onClick={markUnComplete}>
{'Mark as not complete'}</button>

<div>
{/* <Link to="/finish">
<button className="ButtonBlue Complete" onClick={finish}
style={progress >= 100 && current === lessons.length? {} : displayNone  }
 >
{'Finish Course'} </button>
</Link> */}

<button className="ButtonGrey" 
style={session.activeID===lessons.length ? displayNone : { } }
onClick={increment}
>➡</button>
</div>
</div>
</div>
</div>
</div>
}
 
const displayNone = {display: 'none'}
export default Lessons
