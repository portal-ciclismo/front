import { useState } from 'react';
import '../pages-css/Login.css';
import { Link } from 'react-router-dom';

function Login() {

    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    })

    const handleOnChangeLogin = (e, key) => {
        setLoginState({...loginState, [key]: e.target.value})
    }

    const handleLoginForm = (e) => {
        e.preventDefault()
        console.log(loginState)
    }

    return (
        <div className='container-login'>
            <form className='form' onSubmit={handleLoginForm}>
                <h1>Bem Vindo!</h1>
                <input type='email' placeholder='E-mail' required value={loginState.email} onChange={(e) => handleOnChangeLogin(e, 'email')}/>
                <input type='password' placeholder='Senha' required value={loginState.password} onChange={(e) => handleOnChangeLogin(e, 'password')} />
                <button type='submit'>Login</button> 
                <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>           
            </form>
            
        </div>    
    )
}

export default Login;