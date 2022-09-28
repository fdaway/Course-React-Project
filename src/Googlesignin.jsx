
//import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const GoogleSignIn = ({ handleSignIn }) => {
 

  function handleCredentialResponse(response) {
    let identity2 = jwt_decode(response.credential)
    handleSignIn(identity2)
  }
  window.onload = function () {
    const google = window.google
    google.accounts.id.initialize({
      client_id: "1023936046196-eko5tfnruegbdv2efdn4eb13kbfn6vdd.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("123"),
      { theme: "outline", size: "large" }   
    );
    
  }


    return  <div id="123" data-onsuccess="onSignIn" data-theme="dark"></div>

          
}
 
export default GoogleSignIn; 