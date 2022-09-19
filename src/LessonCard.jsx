import { FaPlayCircle, FaCheckCircle } from 'react-icons/fa'

const LessonCard = ({ lesson, session, clickLesson }) => {
    return <div id={lesson.id} className="Card"  style={lesson.id === session.activeID ? cardStyleActive : {}}
            onClick={()=> clickLesson(lesson.id)}  >
                <div className="CardLine1">
                <p className="LessonNumber" >Lesson {lesson.id}</p>
                <p className="LessonNumber" >{session.completedLessons.includes(lesson.id) ? <FaCheckCircle className="CheckIcon" /> : ''}</p>
                </div>
                <p className="LessonTitle"  >{lesson.title}</p>
                <p className="LessonDuration"  ><FaPlayCircle className="PlayIcon" /> {lesson.duration}</p>
            </div> 
}
 
const cardStyleActive = {
    boxShadow: '0 9px 15px rgb(0 0 0 / 25%), 0 6px 6px rgb(0 0 0 / 22%)',
    border: '3px solid #0099f5',
    transition: '800ms',
    background: 'white'
}
export default LessonCard