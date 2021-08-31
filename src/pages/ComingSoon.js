import React from 'react'
import './ComingSoon.css'

export default function ComingSoon() {
    return (
        <div className="container">
            <header>
                <img className='logo-box' src='./img/UGM Hitam 1.png'></img>
                <img className='logo-box' src='./img/Logo KMTK_outline hitam 1.png'></img>
                <img className='logo-box' src='./img/KABINET Hitam 1.png'></img>
            </header>
            <body>
                <img src='./img/Main.png' className='main-img'></img>
                <img src='./img/Monumen Nasional.png' className='monumen'></img>
                <img src='./img/Jam Gadang.png' className='jam-gadang'></img>
            </body>
            <footer>
                <img src='./img/Line.png' className='sosmed-logo'></img>
                <img src='./img/Instagram.png' className='sosmed-logo'></img>
            </footer>
        </div>
    )
}
