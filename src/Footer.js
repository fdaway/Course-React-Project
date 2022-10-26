import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Footer = ( {lessons, session}) => {
    let progress = 0
    progress = (session.completedLessons.length-1) / lessons.length * 100
 

    return <div className="Footer">
        <ul>
        <li><Link to="/contacts" ><FaUser className="UserIcon" /> Contacts</Link></li>  
        <li>  <div className="Progress">
                <div className="innerProgress" style={{'width': `${progress}%`}}><p>Progress: <strong>{Math.round(progress)}%</strong></p></div>
              </div></li>
        <li><Link to="/privacy-policy" >Privacy Policy</Link></li>  
        </ul>
    </div>
}
export default Footer;