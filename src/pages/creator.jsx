import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'
const Creator = ( { session, creationProcess, creation, addCourse, handleCourseChange, handleSubmitCourse, handleSignIn }) => {

    useEffect(() => {
        const google = window.google
        google.accounts.id.initialize({
          client_id: "1023936046196-c55n0ke1qm3goi70ih1khh0hoaqqo1gu.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        
        google.accounts.id.renderButton(
          document.getElementById("gggDiv"),
          { theme: "outline", size: "medium" }  
        )}, [session.isLogged])

        function handleCredentialResponse(response) {
          let identity = jwt_decode(response.credential)
          handleSignIn(identity)
        }
    return  <div className="CreatorArea">
        {session.isLogged? 
            <div className="Visible">
                <h1>Creator's Area</h1>
                <div className="CreatorContent">
                    <div>
                        <div className="CreatorContainer">

                            { creationProcess.hasCourse &&
                            <div className="CreatorCrourses">
                            <Link to="/course">
                            <div className="CourseCard">
                                <p>{creation.courseTitle}</p>
                            </div> 
                            </Link>
                            </div>
                            }

                            <div className="AddCourse" onClick={addCourse} style={creationProcess.hasCourse ? {border: 'none', color: '#777'} : {}}>
                            <p><FaPlus className="FaPlus" style={creation.hasCourse ? {color: '#b9b9b9'} : {}}/></p>
                            <p>Add course</p>
                            </div>
                            {creationProcess.creatingTitle && 
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
            <div className="VHFlex">
                <h2>Sign in to continute</h2>
                {/* <div id="gggDiv" 
                    data-client_id="1023936046196-c55n0ke1qm3goi70ih1khh0hoaqqo1gu.apps.googleusercontent.com"
                    data-auto_select="true"
                    data-login_uri="https://thecourses.online/">
                </div> */}
            </div>
        }
    </div>
 
   
}
export default Creator; 