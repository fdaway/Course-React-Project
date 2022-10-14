import { FaPlayCircle, FaCheckCircle, FaLock } from 'react-icons/fa'

const CreationLessonCard = ({ cLesson, session, clickLesson }) => {

    return <div id={cLesson.id} className="Card"  style={cLesson.id === session.activeID ? cardStyleActive : {}}
            onClick={()=> clickLesson(cLesson.id)}  >
                <div className="CardLessonLine">
                    <p className="LessonNumber" >Lesson {cLesson.id}</p>
                    <p></p>
                </div>
                <div className="CardTitleLine">
                    <p className="LessonTitle"  >{cLesson.title}</p>
                    <p >{cLesson.isLocked && !session.isLogged? <FaLock className="LockIcon" /> : ''}</p>
                </div>
                <p className="LessonDuration"  ><FaPlayCircle className="PlayIcon" /> {cLesson.duration}</p>
            </div> 
}
 
const cardStyleActive = {
    boxShadow: '0 9px 15px rgb(0 0 0 / 25%), 0 6px 6px rgb(0 0 0 / 22%)',
    transition: '800ms',
    background: 'white'
}
export default CreationLessonCard