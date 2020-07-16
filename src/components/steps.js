import React, {useState, useEffect} from 'react';
import {DoneStep, InProgressStep, ToHandleStep} from "./step";
import List from "./list";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {updateCampaign} from "../actions";

function Steps({steps, team_id, updateCampaign}) {

    const ANIMATE = 'faded-in-from-bottom';
    const [entranceClassName, setEntranceClassName] = useState(ANIMATE);
    const [doneGroup, setDoneGroup] = useState([]);
    const [toHandleGroup, setToHandleGroup] = useState([]);
    const [inProgressGroup, setInProgressGroup] = useState([]);


    useEffect(() => {

        // setDoneGroup(steps.filter(item => item.status === ''));
        setToHandleGroup(steps.filter(item => item.status === 'not_started'));
        setDoneGroup(steps.filter(item => item.status === 'done'));
        setInProgressGroup(steps.filter(item => item.status === 'in_progress'));

        return () => {
            setEntranceClassName(ANIMATE);
        }
    }, [steps]);

    console.log(team_id);

    return (
        <div className={`steps ${entranceClassName}`} onAnimationEnd={() => setEntranceClassName('')}>

            {inProgressGroup[0] &&
            <>
                <div className="title__wrap"><h2 className={'title__steps'}>Current</h2></div>
                <InProgressStep step={inProgressGroup[0]} updateCampaign={updateCampaign} team_id={team_id}/></>
            }

            {toHandleGroup.length &&
            <>
                <div className="title__wrap"><h2 className={'title__steps'}>Next</h2></div>
                <List baseClassName={'to-handle'}>{toHandleGroup.map((item, i) => <ToHandleStep step={item} key={i}
                                                                                                team_id={team_id}/>)}</List>
            </>}

            {doneGroup.length &&
            <>
                <div className="title__wrap"><h2 className={'title__steps'}>Done</h2></div>
                <List baseClassName={'done'}>
                    {doneGroup.map((item, i) => <DoneStep step={item} key={i}/>)}
                </List>
            </>}
            
        </div>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateCampaign
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Steps);
