import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { FaSignOutAlt } from 'react-icons/fa'
function Header( {progress} ) {
  
  const [ user, setUser ] = useState({});

  function handleSignOut(){
    setUser({})
  }
  function handlecallBackResponse(response) {
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
    setUser(userObject)
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1023936046196-eko5tfnruegbdv2efdn4eb13kbfn6vdd.apps.googleusercontent.com",
      callback: handlecallBackResponse
    });

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      )
  }, [])
    return <div className="HeaderContainer">
            <header className="App-header">
              <div className="Title">
                <Link to="/">Course Project</Link> 
              </div>
              <div className="Progress">
                <div className="innerProgress" style={{'width': `${progress}%`}}><p>Progress: <strong>{Math.round(progress)}%</strong></p></div>
              </div>
              <div className="StartNav">

              <div id="signInDiv" style={Object.keys(user).length !== 0 ? {display: 'none'} : {}}></div>
               
              { Object.keys(user).length !== 0 &&
              <div className="userInfo">
              <h4>{user.name}</h4>
              <img src={user.picture} alt="Profile"/>
              <button onClick={handleSignOut}><FaSignOutAlt /></button>
              </div>
              } 
               
              
                  
                
              </div>
            </header>
          </div>
}
 
export default Header; 