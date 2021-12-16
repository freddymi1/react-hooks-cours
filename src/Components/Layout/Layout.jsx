import React from 'react'

const Layout = () => {
    return(
        <div className='navbar'>
            <div className="nav-brand">
                LOGO
            </div>
            <div className='nav-item'>
                <ul>
                    <li><a href="#useState">React useState</a></li>
                    <li><a href="#useEffect">React useEffect</a></li>
                    <li><a href="#useContext">React useContext</a></li>
                    <li><a href="#useReducer">React useReducer</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Layout