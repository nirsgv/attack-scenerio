import React from 'react';
import SvgSprite from "./svgSprite";

function Preloader({  }) {

    return (
        <div className={'preloader'} data-test="preloader">
            <SvgSprite name={'SPIDER'}/>
        </div>
  );
}

export default Preloader;
