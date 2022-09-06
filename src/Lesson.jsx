
const Lesson = ({ lessons, lesson, markComplete, current, increment, decrement}) => {
    return <div className="LessonsPage">
                <div className="LessonContainer">  
                    <p>{current}. {lessons[current-1].title}</p>
                    <div className="LessonNav">
                        <button className="ButtonBlue Arrow" 
                        style={current === 1 ? displayNone : {} }
                        onClick={decrement}
                        >⬅ 
                        </button>
                        <button className="ButtonBlue Complete"
                        onClick={()=> markComplete(lesson.id)}  
                        >{current === lessons.length ? 'Finish Course' : 'Mark Complete'}</button>
                     
                        <button className="ButtonBlue Arrow"
                        style={current === lessons.length ? displayNone : {}} 
                        onClick={increment}
                        >⮕</button> 
                     </div>
                </div>
            </div>
}

const displayNone = {display: 'none'}


export default Lesson;