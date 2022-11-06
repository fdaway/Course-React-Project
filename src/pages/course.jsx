import YouTube from 'react-youtube';
import { FaPlus } from 'react-icons/fa'
import CreationLessonCard from '../creationLessonCard'
const Course = ( {creationProcess, creation, session, clickLesson, addLesson, handleTitleChange, handleSubmitLesson, handleVideoChange, handleFreeChange, setDuration} ) => {

    const opts = {
        width: '100%',
        playerVars: {
          autoplay: 1,
          mute: 1,
        }
    }
    const storage = []

    return <div className="CreatorArea">
      
     <h1>{creation.courseTitle}</h1>

     <div className="CreatorContent">
                    <div className="CreatorContainer">

                        <div className="Cards">
                            {creation.length > 0 &&
                            creation.map((cLesson) => (
                            <CreationLessonCard key={cLesson.id+"cr"} cLesson={cLesson} session={session}
                            clickLesson={clickLesson} /> 
                            ))}

                            <div className="AddLesson" onClick={addLesson} style={creationProcess.addingLesson || creation.length > 0? {border: '2px dotted #a2d4f3', color: '#a2d4f3'} : {}}>
                            <p><FaPlus className="FaPlus"  style={creationProcess.addingLesson || creation.length > 0 ? {color: '#a2d4f3'} : {}}/></p>
                            <p>Add lesson</p>
                            </div>

                            {creation.addingLesson && 
                            <div className="CreatorForm AddLessonForm" >
                            <form onSubmit={handleSubmitLesson} >
                                <h4>Lesson Title</h4>
                                <input type="text"  name="title" onChange={handleTitleChange} placeholder="Intro" ></input>
                                <h4>Youtube video id</h4>
                                <input type="text"  name="videoID" onChange={handleVideoChange} placeholder="CAyWN9ba9J8" ></input>
                                <div className="LockedCheckbox">
                                <input type="checkbox" name="isFree" onChange={handleFreeChange} ></input>
                                <p>Free preview lesson</p>
                                </div>
                                
                                <input type="submit" value="Add" ></input>
                            </form>  
                            </div>
                            }
                        </div>
                    </div>
                    { creation.addingLesson &&
                    <div className="CreationLessonPage" style={{width: '100%', marginTop: '1rem', marginLeft: '1rem'}}>
                        <div className="iWrapper">
                            <YouTube videoId={creation.videoID} opts={opts} onReady={setDuration}   /> 
                        </div>
                        <h2>{creation.title}</h2 >
                    </div>
                    }
             </div> 
    </div>
}
export default Course; 