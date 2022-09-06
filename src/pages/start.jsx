const Start = () => {
    return <div className="VerticalContainer">
                <h1>Start Course</h1>
                <div className="LoginContainer">
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                <h1 style={{marginLeft: '0', fontSize:'1.3rem'}}>Glycemic Control</h1>
                <h1 style={{display: 'flex',fontSize:'1.3rem',  fontWeight:'600' , letterSpacing:'-0.05rem', marginRight: '0'}}>72 USD</h1>
                </div>
                
                <input type='text' placeholder='letsdothis@gmail.com'/>
                <div className="CardInfo">
                <input type='text' placeholder='____-____-____-____' name="Card number" style={{width: '80%', letterSpacing: '0.3rem'}}/>
                <input type='text' placeholder='12 / 26' style={{width: '20%'  }}/>
                </div>
           
                <button className="ButtonYellow">Complete Purchase</button>
                </div>
           </div>
}
export default Start;