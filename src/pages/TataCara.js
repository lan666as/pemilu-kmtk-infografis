import React from 'react'
import '../styles/TataCara.css'
import YoutubeEmbed from '../components/YoutubeEmbed';

export default function TataCara() {
    return (
        <div className='tatacara-container'>
            <h1>TATA CARA</h1> 
            <div className='youtube-wrapper'>
                <YoutubeEmbed embedId='8GAEi67UrVw'/>
            </div>
        </div>
    )
}
