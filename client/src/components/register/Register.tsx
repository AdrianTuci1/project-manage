import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom'
import './register.scss';

export function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const {name, email, password} = data
    try{
        const {data} = await axios.post('/register', {
            name, email, password
        })
        if(data.error) {
            toast.error(data.error)
        }else {
            setData({})
            toast.success('login successful. Welcome!')
            navigate('/login')
        }
    } catch(error) {
        console.log(error)
    }
}

  return (
    <div className="signup_container">
    <div className="signup_form_container">
            <form className="form_container" onSubmit={registerUser}>
                <h1>Create Account</h1>
                <input 
                type="text"
                placeholder="Name"
                name = "name"
                onChange={(e) => setData({...data, name: e.target.value})}
                value = {data.name}
                required
                className="input"
                />
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
                    Register
                </button>
                <Link to='/login'>
                <button type="button" className="white_btn">
                    Log in
                </button>
            </Link>
            </form>
        </div>
    </div>
  );
}
