import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import Progress from './progress'
import { useEffect } from 'react';
const Header = ({ lessons, session, handleSignIn }) => {
 useEffect(() => {
  const google = window.google
  google.accounts.id.initialize({
    client_id: "1023936046196-c55n0ke1qm3goi70ih1khh0hoaqqo1gu.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("gDiv"),
    { theme: "outline", size: "medium" }  
  );
  google.accounts.id.renderButton(
    document.getElementById("ggDiv"),
    { theme: "outline", size: "medium" }  
  );
  google.accounts.id.prompt();  
 }, [])
  function handleCredentialResponse(response) {
    let identity = jwt_decode(response.credential)
    handleSignIn(identity)
  }
 
    return <div className="HeaderContainer" style={ session.sideBar ? {} : {  boxShadow: 'none'}}>
            <header className="App-header">
              <div className="Title">
                <Link to="/landing">The Courses</Link> 
              </div>
              <Progress lessons={lessons} session={session}/>
              <div className="StartNav">
              <div className="userInfo">
                <Link to="/"><p>Tech Stack</p></Link>
              </div>
              <div className="userInfo Create">
                <Link to="/creator"><p>Create Course</p></Link>
              </div>
                <div id="gDiv"   
                  data-client_id="1023936046196-c55n0ke1qm3goi70ih1khh0hoaqqo1gu.apps.googleusercontent.com"
                  data-auto_select="true"
                  data-login_uri="https://thecourses.online/"  
                  style={session.isLogged ? {display: 'none'} : {}}>
                </div>
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