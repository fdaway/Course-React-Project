import { withRouter } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Progress = ( { lessons, session }) => {
  let progress = 0
  progress = (session.completedLessons.length-1) / lessons.length * 100
  let location = useLocation()
  if (location.pathname.match(/creator/)){
    return null;
  }
    return <div className="Progress">
    <div className="innerProgress" style={{'width': `${progress}%`}}><p>Progress: <strong>{Math.round(progress)}%</strong></p></div>
  </div>
}
export default Progress; 