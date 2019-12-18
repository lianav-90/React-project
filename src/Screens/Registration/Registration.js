import React, { useState } from 'react';
import API from '../../API/API'


function Registration ({ onTabChange }) {
    const [inputs, setInputs] = useState({username: "", lastname: "", email: "", password: ""})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    } 

    const onRegister = (e) => {
        console.log(inputs);
        
       if(inputs.lastname && inputs.username && inputs.email && inputs.password) {
            API.people.register(inputs)
            .then(res => {
                if(!res.ok) {
                    console.log(res)
                }     
            })
            .then(res => {
                console.log(inputs)
                onTabChange("Login");
            })
       }
        else {
            alert("Empty fields!!!")
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
                    <button onClick={onRegister}>Sign up</button>
                </div>
            </div>
        )
        }
 
   
export default Registration