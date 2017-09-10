import React from 'react';

const GifItem = ({gif, onGifSelectList}) => {
    return (
        <div className="gif-item" onClick={() => onGifSelectList(gif)}>
            <img src={gif.images.downsized.url} alt=""/>
        </div>
    )
};

export default GifItem;