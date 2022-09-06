const Login = () => {
    return <div className="VerticalContainer">
                <h1>Login</h1>
                <div className="LoginContainer">
                <input type='text' placeholder='leva@gmail.com'/>
                <input type='text' />
                <a style={{fontSize: '0.85rem', textAlign:'right'}}href="/login">Forgot password?</a>
                <button className="ButtonBlue">Log in</button>
                </div>
           </div>
}
export default Login;