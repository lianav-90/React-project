import React from 'react'


const Nav = ({onTabChange, bar}) => {

    return (
        <div className="container-fluid top">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button onClick={onTabChange.bind(null, "Home")} className="nav-link">Home</button>
                </li>
                <li className="nav-item">
                    <button onClick={onTabChange.bind(null, "Login")} className="nav-link">Login</button>
                </li>
                <li className="nav-item">
                    <button onClick={onTabChange.bind(null, "Registration")} className="nav-link">Registration</button>
                </li>
                <li className="nav-item">
                    <button onClick={onTabChange.bind(null, "Workspace")} className="nav-link">Workspace</button> 
                </li>
            </ul>
        </div>
    )
}
export default Nav;