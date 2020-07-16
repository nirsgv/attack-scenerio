import React from 'react';
import SvgSprite from "./svgSprite";

function MenuItem({ name, id, setSelectedTeam, selectedTeamId }) {

    return (
    <div className={`menu-item__link menu-item__link--${selectedTeamId === id ? '' : 'un'}selected`} onClick={() => setSelectedTeam({id, name})}>
        <SvgSprite name="SPIDER"/>
        <h3>{name}</h3>
    </div>
  );
}

export default MenuItem;
