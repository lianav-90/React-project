import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Screens/Home/Home';
import Nav from './Screens/Navigation/Nav';
import Login from './Screens/Login/Login';
import Workspace from './Components/Workspace/Workspace';
import Registration from './Screens/Registration/Registration'
import './App.css'


function App() {
  
    const [tab, setTab] = useState({bar: "Home"})

    const onTabChange = (newTab) => {
        setTab({bar: newTab})
    }

    const logout =()=>{
        localStorage.removeItem("Login")
        setTab({bar: "Login"})
    }

    return (
        <div className="App">
            <Nav onTabChange={onTabChange} />
            {(tab.bar === "Home") && <Home onTabChange={onTabChange} />}
            {(tab.bar === "Login") && <Login onTabChange={onTabChange} />}
            {(tab.bar === "Registration") && <Registration onTabChange={onTabChange }/>}
            {(tab.bar === "Workspace") && <Workspace onTabChange={onTabChange} logout={logout} />}
        </div>
    );
}

export default App;
