import YouTube from 'react-youtube';
import { useEffect, useState } from 'react';

const VideoPlayer = ( { session, lessons, markComplete} ) => {
    
    const opts = {
        width: '100%',
        playerVars: {
          autoplay: 1,
          mute: 1
        }
    }
  function getDuration(e) {
    console.log(e.target.getDuration())
  }
  const [value, setValue] = useState(0); 
  useEffect(() => {
    setValue(value => value + 1);
    console.log("Video re-render", value)
  }, [session, value])

    //(e) => console.log(e.target.getDuration()
 
    return <div className="iWrapper">
        <YouTube videoId={lessons[session.activeID-1].videoID} opts={opts} onEnd={markComplete}  onReady={getDuration}   />          
        </div>
}

export default VideoPlayer