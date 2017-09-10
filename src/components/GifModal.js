import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
    if (!props.selectedGifApp) {
        return <div></div>;
    }

    return (
        <Modal
            isOpen={props.modalIsOpenApp}
            onRequestClose={() => props.onRequestClose()}>
            <div className="gif-modal">
                <img src={props.selectedGifApp.images.original.url} alt=""/>
                <p><strong>Source:</strong> <a href={props.selectedGifApp.source}>{props.selectedGifApp.source}</a></p>
                <p><strong>Rating:</strong> {props.selectedGifApp.rating}</p>

                <button onClick={() => props.onRequestClose()}>close</button>
            </div>
        </Modal>
    );
};

export default GifModal;
