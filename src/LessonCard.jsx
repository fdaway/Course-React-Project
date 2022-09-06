import { FaPlayCircle, FaCheckCircle } from 'react-icons/fa'

const LessonCard = ({ lesson, clickLesson, current }) => {
    return <div id={lesson.id} className="Card"  style={parseInt(lesson.id) === parseInt(current) ? cardStyleActive : {}}
            onClick={()=> clickLesson(lesson.id)}  >
                <div className="CardLine1">
                <p className="LessonNumber" >Lesson {lesson.id}</p>
                <p className="LessonNumber" >{lesson.isComplete ? <FaCheckCircle className="CheckIcon" /> : ''}</p>
                </div>
                <p className="LessonTitle"  >{lesson.title}</p>
                <p className="LessonDuration"  ><FaPlayCircle className="PlayIcon" /> {lesson.duration}</p>
            </div> 
}
 
const cardStyleActive = {
    boxShadow: '0 9px 15px rgb(0 0 0 / 25%), 0 6px 6px rgb(0 0 0 / 22%)',
    border: '7px solid #0483dd',
    transition: '1200ms'
}
export default LessonCard