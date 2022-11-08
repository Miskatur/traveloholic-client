import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li className='font-semibold'><Link to={'/'}>Home</Link></li>
        <li className='font-semibold'><Link to={'/playlists'}>Playlists</Link></li>
        <li className='font-semibold'><Link to={'/blog'}>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-semibold'><Link to={'/myplaylist'}>My Playlist</Link></li>
                    <li className='font-semibold'><Link to={'/addcontent'}>Add Content</Link></li>
                    <li className='font-semibold'><Link onClick={handleLogout}>Log Out</Link></li>
                </>
                :
                <>
                    <li className='font-semibold'><Link to={'/login'}>Login</Link></li>
                    <li className='font-semibold'><Link to={'/Register'}>Register</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar mb-6 bg-teal-200 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className="flex justify-center items-center">
                    <img src={logo} style={{ height: '3em', width: '3em' }} alt="" />
                    <div>
                        <h3 className='text-lg font-semibold ml-3'>Traveloholic Soul</h3>
                        <p className='text-xs font-semibold justify-center hidden md:flex '>Tale of a Traveler</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;