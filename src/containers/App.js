import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import GifList from '../components/GifList';
import GifModal from "../components/GifModal";
import SearchBar from '../components/SearchBar';
import '../styles/app.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <SearchBar onTermChange={this.props.actions.requestGifs}/>
                <GifList gifs={this.props.gifsMap}
                         onGifSelectApp={
                             selectedGifAction => this.props.actions.openModal({selectedGifAction})
                         }/>
                <GifModal modalIsOpenApp={this.props.modalIsOpenMap}
                          selectedGifApp={this.props.selectedGifMap}
                          onRequestClose={() => this.props.actions.closeModal()}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gifsMap: state.gifsRoot.dataRd,
        modalIsOpenMap: state.modalRoot.modalIsOpenRd,
        selectedGifMap: state.modalRoot.selectedGifRd
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
