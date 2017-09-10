import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal'

const rootReducer = combineReducers({
    gifsRoot: GifsReducer,
    modalRoot: ModalReducer
});

export default rootReducer;
