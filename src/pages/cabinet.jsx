import { Link } from 'react-router-dom'
const Cabinet = ( {session, handleLogOut} ) => {
      
    return <div className="VerticalContainer">
    <div className="CabinetContainer">
  
        <div className="Cabinet">
            <div>
                <img src={session.avatar} alt="Profile"/>
            </div>
            <div> 
                <h2><span>Name: </span>{session.name}</h2> 
                <h2><span>Email: </span>{session.email}</h2>    
                <Link to='/'>
                <p onClick={handleLogOut} style={{color: '#0099f5', fontWeight: '600', fontSize: '1.1rem'}}>Sign Out</p> 
                </Link>   
            </div>
        </div>
        </div>
        </div>
}
export default Cabinet; 