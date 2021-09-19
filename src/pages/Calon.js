import React from 'react'
import '../styles/Calon.css'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function DetailCalon() {
    return (
        <div className='detail-container'>
            <div className='detail-info'>
                <h1 className='calon-name'>Ahmad Zidan</h1>
                <div className='detail-header'>
                    <img className='calon-photo' src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="images"></img>
                    <div className='calon-info'></div>
                    <div className='visi-misi'>
                        <div className='calon-visi'>
                            <h2>VISI</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className='calon-misi'>
                            <h2>MISI</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>        
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                fill="#FCF2E3"
                fillOpacity="1"
                d="M0,128L34.3,160C68.6,192,137,256,206,234.7C274.3,213,343,107,411,90.7C480,75,549,149,617,165.3C685.7,181,754,139,823,112C891.4,85,960,75,1029,96C1097.1,117,1166,171,1234,176C1302.9,181,1371,139,1406,117.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                ></path>
            </svg>
            
            <div className='calon-video'>
                <YoutubeEmbed embedId='8GAEi67UrVw'/>
            </div>
            
        </div>
    )
}
