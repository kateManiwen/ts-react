import * as React from 'react';
import GalleryPhoto from './galleryPhoto';
import {sourceListData} from '../data/sourceList';

export interface Props {
    sourceList?:any;
    currentPhoto?: number;
    turnOver?: boolean;
    onCurrentPhoto?: () => void;
    onOverturnPhoto?: () => void;
}

function Gallery({ sourceList = sourceListData, currentPhoto, onCurrentPhoto, onOverturnPhoto } : Props) {
    return (
        <section>
            <section  className="img-sec">
                {sourceList.photos.map((source:any) => {
                    <GalleryPhoto source={source}/>
                })}
            </section>
            <nav className="controller-nav">
                <span className="controller-unit"></span>
            </nav>
        </section>
    );
}

export default Gallery;