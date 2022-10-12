import { FaPlus } from 'react-icons/fa'
import LessonCard from '../LessonCard'
const Course = ( {creation, lessons, session, clickLesson, addLesson} ) => {
 
    return <div className="CreatorArea">
      
     <h1>{creation.courseTitle}</h1>

     <div className="CreatorContent">
                <div>
                    <div className="CreatorContainer">
                        <div className="Cards">
                            {lessons.map((lesson) => (
                            <LessonCard key={lesson.id} lesson={lesson} session={session}
                            clickLesson={clickLesson} /> 
                            ))}
                        </div>
                    
 
                        <div className="AddCourse" onClick={addLesson}>
                        <p><FaPlus className="FaPlus"/></p>
                        <p>Add lesson</p>
                        </div>
                        {creation.addingLesson && 
                        <div className="CreatorForm" >
                        {/* <form onSubmit={handleSubmit} >
                            <h4>Lesson Title</h4>
                            <input type="text"  name="courseTitle" onChange={handleTitleChange} placeholder="Intro" ></input>
                            <input type="submit" value="Add" ></input>
                        </form> */} Form
                        </div>
                        }
                    </div>
                </div>
             </div> 
   
</div>
}
export default Course; 