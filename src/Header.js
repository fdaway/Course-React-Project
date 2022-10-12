import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import Progress from './progress'
const Header = ({ lessons, session, handleSignIn }) => {
 
  

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
              <Progress lessons={lessons} session={session}/>
              <div className="StartNav">
              <div className="userInfo">
                <Link to="/creator"><p>Create Course</p></Link>
              </div>
                <div id="g-signin2" data-prompt_parent_id="g_id_onload" data-onsuccess="onSignIn" data-theme="dark" style={session.isLogged ? {display: 'none'} : {}}></div>
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