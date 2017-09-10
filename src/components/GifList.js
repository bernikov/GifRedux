import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id}
                        gif={image}
                        onGifSelectList={props.onGifSelectApp}/>
    });

    return (
        <div className="gif-list">{gifItems}</div>
    );
};

export default GifList;