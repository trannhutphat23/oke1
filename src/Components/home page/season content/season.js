import React from 'react';
import ReactPlayer from 'react-player'
import './season.css'
import { useNavigate } from 'react-router-dom';

function SeasonContent({ videoUrl, tilte, content, link }) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(link)
    }

    return (
        <div className="season-content">
            <ReactPlayer
                className="video"
                width="90%"
                height="90%"
                url={videoUrl}
                controls={false}
                playing={true}
                loop={true}
                muted={true}
            />
            <h1>{tilte}</h1>
            <p>{content}</p>
            <button className="shop-button" onClick={handleClick}>
                <p>Shop</p>
            </button>
        </div>
    );
}

export default SeasonContent;