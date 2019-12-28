import React, { useState } from 'react';
import API from '../../API/API'


function Registration ({ onTabChange }) {

    const [user, setUser] = useState({username: "", lastname: "", email: "", password: ""})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    } 

    const onRegister = (user) => {
        
        if (user.username && user.lastname && user.email && user.password) {
            API.people.register(user)
            .then(res => {
                if (res.ok) {
                    onTabChange ("Login");
                } else {
                    alert("Something went wrong")
                }
                return res.json();
            })
        }  
    }
       
    return (
        <div className="container register">
            <h3>Register</h3>
            <div>
                <input type ="text" name="username" onChange={handleInputChange}  placeholder="Firstname"/>
            </div>
            <div>
                <input type ="text" name="lastname" onChange={handleInputChange}  placeholder="Lastname"/>
            </div>
            <div>
                <input type ="text" name="email" onChange={handleInputChange}  placeholder="Email"/>
            </div>
            <div>
                <input type ="password" name="password" onChange={handleInputChange}  placeholder="Password"/>
            </div>
            <div>
                <button onClick={onRegister.bind(null, user)} type="submit">Sign up</button>
            </div>
        </div>
    )
}
 
   
export default Registration