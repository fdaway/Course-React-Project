import { Link } from 'react-router-dom'
import { FaPlayCircle, FaCheckCircle, FaLock } from 'react-icons/fa'
const Landing = () => {
    return <div className="Landing">

      
   
    <h1>The Courses</h1>
    <Link to="/"><h2>Built with User Experience in mind</h2></Link>
    <div className="Hero">
        {/* <img draggable="false" src="/cr.png" alt="Course preview" /> */}
    </div>
    <div className="promoCards">
        <div className="Left">
            <div className='Card'  style={{boxShadow: '0 9px 15px rgb(0 0 0 / 25%), 0 6px 6px rgb(0 0 0 / 22%',  userSelect:'none'}} >
            <div className="CardLessonLine">
                        <p className="LessonNumber" >Lesson 6</p>
                        <p><FaCheckCircle className="CheckIcon" /></p>
                    </div>
                    <div className="CardTitleLine">
                        <p className="LessonTitle"  >Title</p>
                        <p ><div className="Free">FREE</div></p>
                    </div>
                    <p className="LessonDuration"  ><FaPlayCircle className="PlayIcon" /> 5min 23s</p>
            </div>
            <div className='Card' style={{marignBotton: '0',  userSelect:'none'}}>
            <div className="CardLessonLine">
                        <p className="LessonNumber" >Lesson 7</p>
                        <p> </p>
                    </div>
                    <div className="CardTitleLine">
                        <p className="LessonTitle"  >Title</p>
                        <p ><FaLock className="LockIcon" /></p>
                    </div>
                    <p className="LessonDuration"  ><FaPlayCircle className="PlayIcon" /> 5min 23s</p>
            </div>
        </div>
        <div className="Right">
            <h3>Free previews</h3>
                <p>Confirm audience expactations, increase enrollments and build subscriber base showcasing sample content</p>
        </div>
    </div>    
    <div className="promoCards">
        <div className="Left">
            <img draggable="false" src="/signin.png" alt="Google sign in" />
        </div>
        <div className="Right">
            <h3>1-Click sign-up / sign-in</h3>
                <p>Minimum friction User Experience with no forms or bottlenecks. Sign up and purchase with just a few clicks. </p>
        </div>
    </div>    

    
              
</div>
}
export default Landing; 