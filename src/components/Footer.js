import React from 'react'
import '../styles/Footer.css'
import LogoKMTK from '../assets/images/logo-kmtk.png'
import logoKabinet from '../assets/images/logo-kabinet-kmtk.png'
import LogoUGM from '../assets/images/logo-ugm.png'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='image-wrapper'>
                <img className='logo' src={LogoUGM} alt='logo UGM'></img>
                <img className='logo' src={LogoKMTK} alt='logo kmtk'></img>
                <img className='logo' src={logoKabinet} alt='logo kabinet'></img>
            </div>
            <div className='official-account'>
                official account
            </div>
        </div>
    )
}
