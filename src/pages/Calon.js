import React from 'react'
import '../styles/Calon.css'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function DetailCalon() {
    return (
        <div className='detail-container'>
            <div className='detail-header'>
                <div className='calon-photo'></div>
                <h1 className='calon-name'>Ahmad Zidan</h1>
            </div>
            <div className='calon-video'>
                <YoutubeEmbed embedId='8GAEi67UrVw'/>
            </div>
            <div className='calon-visi'>
                <h2>VISI</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='calon-misi'>
                <h2>MISI</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}
