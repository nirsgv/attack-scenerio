import React from 'react';
import PropTypes from 'prop-types';
import { imgData } from "../data/localImgData";

function SvgSprite ({...restProps}) {
    const { name, className, src = imgData.sprite.src, clickCb, viewBox = '0 0 24 24', style={} } = restProps;

    const clickHandler = (event) => {
        event.stopPropagation();
        clickCb && clickCb(event);
    };

    return (
        <span className={className} onClick={() => clickHandler} style={style}>
           <svg viewBox={viewBox}>
                <use xlinkHref={`${src}#${name}`} />
            </svg>
        </span>
    );
}

export default SvgSprite;