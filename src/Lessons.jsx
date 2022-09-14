import LessonCard from './LessonCard.jsx'
// import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const  Lessons  = ({ lessons, clickLesson, markComplete, markUnComplete, increment, decrement, current }) => {

    return <div className="ContentContainer">

<div className="Cards">
{lessons.map((lesson) => (
<LessonCard key={lesson.id} lesson={lesson} 
clickLesson={clickLesson} /> 
))}
</div>
 
<div className="LessonsPage">
<div className="LessonContainer">  
{lessons.map((lesson) => (
    lesson.isActive ? 
    <h1 key={lesson.id}>{lesson.id}. {lesson.title}</h1> 
    : null
    ))}

<div className="LessonNav">
<button className="ButtonGrey" 
style={current === 1 ? displayNone : { } }
onClick={decrement}
>⬅</button>

<button className="ButtonBlue Complete"
style={lessons[current-1].isComplete ? displayNone : {}}
onClick={markComplete}>
<FaCheck className="CompleteIcon" /> {'Mark Complete'} </button>

<button className="ButtonBlue Complete"
style={ lessons[current-1].isComplete ? {} : displayNone}
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
style={current === 1 || current===lessons.length ? displayNone : { } }
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
