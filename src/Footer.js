import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
 
function Footer() {
    return <div className="Footer">
        <ul>
        <li><Link to="/contacts" ><FaUser className="UserIcon" /> Contacts</Link></li>  
        <li><Link to="/" >  Terms and Conditions</Link></li>  
        </ul>
    </div>
}
export default Footer;