import React from 'react'
import { Link } from 'react-router-dom'
import LogoKMTK from '../assets/images/logo-kmtk.png'
import logoKabinet from '../assets/images/logo-kabinet-kmtk.png'
import '../styles/Navbar.css';
import { useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    window.onscroll = () => scrollFunction();

    const scrollFunction = () => {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 80) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    return (
        <div className={scrolled ? 'nav-container active-scroll' : 'nav-container'}>
            <div className='nav-logo'>
                PEMILU KMTK 2021
            </div>
            <div className='nav-menu'>
                <Link className='menu' to="/">Home</Link>
                <Link className='menu' to="/">Calon</Link>
                <Link className='menu' to="/">Tata Cara</Link>
            </div>
        </div>
    )
}
