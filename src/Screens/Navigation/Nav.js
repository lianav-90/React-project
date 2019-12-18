import React from 'react';

const Nav = ({clickFunction, tab1}) => {
    return (
        <div className="container-fluid top">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a onClick={clickFunction.bind(null, "Home")} className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a onClick={clickFunction.bind(null, "Login")} className="nav-link">Login</a> 
                </li>
                <li className="nav-item">
                    <a onClick={clickFunction.bind(null, "Registration")} className="nav-link">Registration</a>
                </li>
            </ul>
        </div>
    )
}
export default Nav;