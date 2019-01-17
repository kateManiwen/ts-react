import Gallery from '../components/gallery';
import * as actions from '../actions/';
import { GalleryState } from '../types/index';
import { connect, DispatchProp } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ currentPhoto, turnOver }: GalleryState) {
    return {
        currentPhoto,
        turnOver,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.GalleryAction>) {
    return {
        currentPhoto: (index:number) => dispatch(actions.currentPhoto(index)),
        overturnPhoto: (overturn:boolean) => dispatch(actions.overturnPhoto(overturn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);