import { Link } from 'react-router-dom';

function Header( {progress} ) {
    return <div className="HeaderContainer">
            <header className="App-header">
              <div className="Title">
                <Link to="/">Glycemic Control</Link> 
              </div>
              <div className="Progress">
                
                <div className="innerProgress" style={{'width': `${progress}%`}}><p>Progress: {Math.round(progress)}%</p></div>
              </div>
              <div className="Start-nav">
                <Link to="/login"><button className="NakedButtonBlack">Login</button></Link>
                <Link to="/start"><button className="ButtonBlue">Start Course</button></Link>
              </div>
            </header>
          </div>
}
 
export default Header; 