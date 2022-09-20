import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

const Header = ({ lessons, session, handleSignIn }) => {
 
  let progress = session.completedLessons.length / lessons.length * 100
  const [ user, setUser ] = useState({});
  const [logOutStyle, setStyle] = useState({display:'none'})

  function handleSignOut(){
    setUser({})
  }
  function handlecallBackResponse(response) {
    let identity = jwt_decode(response.credential)
     setUser(identity)
    //handleIdentityFetch(identity)
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
  },[])

    return <div className="HeaderContainer" 
      onMouseLeave={e => {
      setStyle({display: 'none'})
      }}>
            <header className="App-header">
              <div className="Title">
                <Link to="/">Course React Project</Link> 
              </div>
              <div className="Progress">
                <div className="innerProgress" style={{'width': `${progress}%`}}><p>Progress: <strong>{Math.round(progress)}%</strong></p></div>
              </div>
              <div className="StartNav">

              <div id="signInDiv" style={Object.keys(user).length !== 0 ? {display: 'none'} : {}}></div>
               
              { Object.keys(user).length !== 0 &&
              <div className="userInfo"
              onClick={e => {
              setStyle({display: 'block', color: 'rgb(4, 131, 221)', fontWeight: '600'});
              }}
              >
              <h4>{user.name}</h4>
              <img src={user.picture} alt="Profile"/>
              <p onClick={handleSignOut} style={logOutStyle}>Sign Out</p>
              </div>
              } 
              </div>
            </header>
          </div>
}
 
export default Header; 