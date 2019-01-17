import * as React from 'react';

export interface Props {
    source: any;
}

function GalleryPhoto({ source } : Props) {
    return (
        <figure  className="img-figure">
            <img src={source.imgSrc} alt={source.title}/>
            <figcaption>
                <h2 className="img-title">{source.title}</h2>
                <div className="img-back">
                    <p>Here he comes Here comes Speed Racer.</p>
                </div>
            </figcaption>
        </figure>
    );
}
export default GalleryPhoto;

