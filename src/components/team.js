import React from 'react';
import Steps from "./steps";

function Team({ instance = {} }) {
    const { steps, team_id } = instance;

    return (
    <div className="team">
        {steps && <Steps steps={steps} team_id={team_id}/>}
    </div>
  );
}

export default Team;
