import './login.scss';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

   const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try{
        const {data} = await axios.post('/login', {
            email,
            password
        })
        if(data.error) {
            toast.error(data.error)
        } else {
            setData({});
            navigate('/dashboard')
            window.localStorage.setItem("isLogedIn", true)
              };
        
    }catch(error) {
        console.log(error)
    }
   }

    return(
        <div className="login_container">
            <div className="loginform_container">
                <form className="form_container" onSubmit={loginUser}>
                        <h1>Login to your Account</h1>
                        <input 
                        type="email"
                        placeholder="Email"
                        name = "email"
                        onChange={(e) => setData({...data, email: e.target.value})}
                        value = {data.email}
                        required
                        className="input"
                        />
                        <input 
                        type="password"
                        placeholder="Password"
                        name = "password"
                        onChange={(e) => setData({...data, password: e.target.value})}
                        value = {data.password}
                        required
                        className="input"
                        />
                        <button type="submit" className="green_btn">
                            Log in
                        </button>
                        <Link to='/register'>
                            <button type="button" className="white_btn">
                                Register
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
    )
}

export default Login;