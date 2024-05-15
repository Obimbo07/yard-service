import React from 'react'
import Navbar from './NavBar'


function Layout({ children }){
    return (
        <div className='navbar-container'>
            <Navbar />
            <div className='content'>
                { children }
            </div>
            <footer>
                <p>Copyright Austin Obimbo</p>
            </footer>
        </div>
    );
}

export default Layout;
