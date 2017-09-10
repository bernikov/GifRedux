import {OPEN_MODAL, CLOSE_MODAL} from '../actions';

const initialState = {
    selectedGifRd: null,
    modalIsOpenRd: false
};

export default function modal(state = initialState, action) {
    console.log("Modal Action : ", action);
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalIsOpenRd: true,
                selectedGifRd: action.gif.selectedGifAction
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalIsOpenRd: false,
                selectedGifRd: null
            };
        default:
            return state;
    }
}
