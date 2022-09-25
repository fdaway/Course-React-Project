import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const Header = ({ lessons, session, handleSignIn }) => {
 
  let progress = 0
  progress = (session.completedLessons.length-1) / lessons.length * 100

  function handlecallBackResponse(response) {
    let identity = jwt_decode(response.credential)
    handleSignIn(identity)
  }
 
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1023936046196-eko5tfnruegbdv2efdn4eb13kbfn6vdd.apps.googleusercontent.com",
      callback: handlecallBackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "medium" }
    )
  }, [])

    return <div className="HeaderContainer">
            <header className="App-header">
              <div className="Title">
                <Link to="/">Course React Project</Link> 
              </div>
              <div className="Progress">
                <div className="innerProgress" style={{'width': `${progress}%`}}><p>Progress: <strong>{Math.round(progress)}%</strong></p></div>
              </div>
              <div className="StartNav">
                <div id="signInDiv" style={session.isLogged ? {display: 'none'} : {}}></div>
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