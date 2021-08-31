import React from 'react'
import './ComingSoon.css'

export default function ComingSoon() {
    return (
        <div className="container">
            <header>
                <img className='logo-box' src='./img/UGM Hitam 1.png' alt='Logo UGM'></img>
                <img className='logo-box' src='./img/Logo KMTK_outline hitam 1.png' alt='Logo KMTK'></img>
                <img className='logo-box' src='./img/KABINET Hitam 1.png'alt='Logo Kabinet KMTK 2020/2021'></img>
            </header>
            <body>
                <img src='./img/Main.png' className='main-img' alt='Hero typography'></img>
                <img src='./img/Monumen Nasional.png' className='monumen' alt='Monumen Nasional'></img>
                <img src='./img/Jam Gadang.png' className='jam-gadang' alt='Jam Gadang'></img>
            </body>
            <footer>
                <img src='./img/Line.png' className='sosmed-logo' alt='Logo LINE'></img>
                <img src='./img/Instagram.png' className='sosmed-logo' alt='Logo Instagram'></img>
            </footer>
        </div>
    )
}
