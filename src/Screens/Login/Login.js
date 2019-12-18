import React, {useState} from 'react'
import API from '../../API/API';
import Storage from '../../Services/Storage';

function Login({ onTabChange }) {
    const [user, setUser] = useState({email: "", password: ""})

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    } 

    const onSubmit = (user) => {
        if(user.email && user.password) {
            API.people.login(user)
            .then(res => {
                if(!res.ok) {
                    alert("WRONG EMAIL or PASSWORD")
                    throw new Error();
                }
                return res.json()     
            })
            .then(user => {
                Storage.set("user", user.userId);
                onTabChange("Workspace");
            })
        }
        else {
            alert("Empty fields!!!")
        }
    }

    return (
        <div className="login">
            <h3>Login</h3>
            <div>
                <input onChange={onHandleChange} name="email" type="text" placeholder="Email"/>
            </div>
            <div>
                <input onChange={onHandleChange} name="password" type="password" placeholder="Password"/>
            </div>
            <div>
                <button onClick={() => onSubmit(user)}>Sign in</button>
            </div>
        </div>
    )
}

export default Login
