import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Creator = ( { session, creation, creationLessons, addCourse, handleCourseChange, handleSubmitCourse }) => {


    return  <div className="CreatorArea">
        {session.isLogged? 
        <div>
            <h1>Creator's Area</h1>
            <div className="CreatorContent">
                <div>
                    <div className="CreatorContainer">

                        { creation.hasCourse &&
                        <div className="CreatorCrourses">
                        <Link to="/course">
                        <div className="CourseCard">
                            <p>{creationLessons.courseTitle}</p>
                        </div> 
                        </Link>
                        </div>

                        }
                        <div className="AddCourse" onClick={addCourse} style={creation.hasCourse ? {border: 'none', color: '#777'} : {}}>
                        <p><FaPlus className="FaPlus" style={creation.hasCourse ? {color: '#b9b9b9'} : {}}/></p>
                        <p>Add course</p>
                        </div>
                        {creation.creatingTitle && 
                        <div className="CreatorForm" >
                        <form onSubmit={handleSubmitCourse} >
                            <h4>Course title</h4>
                            <input type="text"  name="courseTitle" onChange={handleCourseChange} placeholder="My First Course" ></input>
                            <input type="submit" value="Add" ></input>
                        </form>
                        </div>
                        }
                    </div>
                </div>
             </div> 
        </div>
    :
    <div className="VHFlex"><h1>Sign In</h1></div>
    }
    </div>
 
   
}
export default Creator; 