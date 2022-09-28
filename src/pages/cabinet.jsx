import { Link } from 'react-router-dom'
const Cabinet = ( {session, handleLogOut} ) => {
      
    return <div className="VerticalContainer">
    <div className="CabinetContainer">
   
        <div className="Cabinet">
        <h1>Profile</h1>
            <div className="CabinetFlex">
            <div>
                <img src={session.avatar} alt="Profile"/>
            </div>
            <div style={{marginTop: '-.3rem'}}> 
                 <span>Name: </span>
                <h2>{session.name}</h2> 
                <span>Email: </span>
                <h2>{session.email}</h2>    
               
            </div>
        </div>
        <Link to='/'>
                <p className="signOut" onClick={handleLogOut}>Sign Out</p> 
                </Link>   
        </div>
        </div>
        </div>
}
export default Cabinet; 