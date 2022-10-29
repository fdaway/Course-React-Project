import { FaPlayCircle, FaCheckCircle, FaLock } from 'react-icons/fa'

const LessonCard = ({ lesson, session, clickLesson }) => {

    return <div id={lesson.id} className="Card"  style={lesson.id === session.activeID ? cardStyleActive : {}}
            onClick={()=> clickLesson(lesson.id)}  >
                <div className="CardLessonLine">
                    <p className="LessonNumber" >Lesson {lesson.id}</p>
                    <p>{session.completedLessons.includes(lesson.id) ? <FaCheckCircle className="CheckIcon" /> : ''}</p>
                </div>
                <div className="CardTitleLine">
                    <p className="LessonTitle"  >{lesson.title}</p>
                    <p >{lesson.isLocked && !session.isLogged? <FaLock className="LockIcon" /> : ''}</p>
                </div>
                <p className="LessonDuration"  ><FaPlayCircle className="PlayIcon" /> {lesson.duration}</p>
            </div> 
}
 
const cardStyleActive = {
    boxShadow: '0 9px 15px rgb(0 0 0 / 25%), 0 6px 6px rgb(0 0 0 / 22%)',
    transition: '800ms',
    background: 'white'
}
export default LessonCard