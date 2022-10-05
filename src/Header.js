import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

const Header = ({ lessons, session, handleSignIn }) => {
 
  let progress = 0
  progress = (session.completedLessons.length-1) / lessons.length * 100

  function handleCredentialResponse(response) {
    let identity = jwt_decode(response.credential)
    handleSignIn(identity)
  }
  window.onload = () => {
    const google = window.google
    google.accounts.id.initialize({
      client_id: "1023936046196-c55n0ke1qm3goi70ih1khh0hoaqqo1gu.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("g-signin2"),
      { theme: "outline", size: "medium" }  
    );
    google.accounts.id.prompt();  
  }


    return <div className="HeaderContainer">
            <header className="App-header">
              <div className="Title">
                <Link to="/">Course React Project</Link> 
              </div>
              <div className="Progress">
                <div className="innerProgress" style={{'width': `${progress}%`}}><p>Progress: <strong>{Math.round(progress)}%</strong></p></div>
              </div>
              <div className="StartNav">
                <div id="g-signin2"  data-onsuccess="onSignIn" data-theme="dark" style={session.isLogged ? {display: 'none'} : {}}></div>
                <Link to="/cabinet">
                { session.isLogged &&
                <div className="userInfo">
                  <h4>{session.name}</h4>
                  <img src={session.avatar} alt="Profile"/>
                </div>
                } </Link>
              </div>
            </header>
          </div>
}
 
export default Header; 