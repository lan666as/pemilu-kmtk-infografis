import React from 'react'
import { Link } from 'react-router-dom'
import LogoKMTK from '../assets/images/logo-kmtk.png'
import logoKabinet from '../assets/images/logo-kabinet-kmtk.png'
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className='nav-logo'>
                <img className='logo' src={LogoKMTK} alt='logo kmtk'></img>
                <img className='logo' src={logoKabinet} alt='logo kabinet'></img>
            </div>
            <div className='nav-menu'>
                <Link className='menu' to="/">Home</Link>
                <Link className='menu' to="/">Calon</Link>
                <Link className='menu' to="/">Tata Cara</Link>
            </div>
        </div>
    )
}
