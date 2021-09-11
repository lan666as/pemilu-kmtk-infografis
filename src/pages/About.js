import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import '../styles/About.css'

export default function About() {
    return (
        <div className='about-container'>
            <div className='calon-text'>CALON KETUA</div>
            <div className='card-wrapper'>
                <div>
                    <Link to="/calon1"><Card no="1"/></Link>
                    <Link to="/calon2"><Card no="2"/></Link>
                </div>
                <div>
                    <Link to="/calon3"><Card no="3"/></Link>
                    <Link to="/calon4"><Card no="4"/></Link>
                </div>
            </div>
        </div>
    )
}
