import React, { useEffect } from 'react';
import SvgSprite from "./svgSprite";

function ToHandleStep({step}) {

    const { status, step_id, step_name } = step;




    return (
    <div className={`step step--${status}`}>
        <SvgSprite name="SKEE_MASK"/>
        <h3 className={'txt'}>{step_name}</h3>
    </div>
  );
}

function InProgressStep({step, team_id, updateCampaign}) {
    const { status, step_id, step_name } = step;

    useEffect(() => {
        updateCampaign(step_id, team_id);
    }, [step]);

    return (
    <div className={`step step--${status}`}>
        <SvgSprite name="SKEE_MASK"/>
        <h3 className={'txt'}>{step_name}</h3>
    </div>
  );
}

function DoneStep({step}) {
    const { status, step_id, step_name } = step;
    return (
        <div className={`step step--${status}`}>
            <h3 className={status}>{step_name}</h3>
        </div>
    );
}


export { DoneStep, InProgressStep, ToHandleStep };
