import { REQUEST_GIFS } from '../actions';

const initialState =  {
    dataRd: []
};

export default function gifs(state = initialState, action) {
    console.log("Action: " , action.type)

    switch (action.type) {
        case REQUEST_GIFS:
            return {
                ...state, dataRd: action.payload.body.data
            };
        default:
            return state;
    }
}
