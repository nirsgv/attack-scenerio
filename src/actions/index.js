import { SET_CAMPAIGN } from '../reducers';
import { UPDATE_CAMPAIGN } from '../reducers';
import { SET_SELECTED_TEAM } from '../reducers';


function setCampaignStore(campaign) {

    const action = {
        type: SET_CAMPAIGN,
        payload: campaign
    };
    return action;
}

function setSelectedTeam({id, name}) {

    const action = {
        type: SET_SELECTED_TEAM,
        payload: {id, name}
    };
    return action;
}

function updateCampaign(step_id, team_id ) {
    const action = {
        type: UPDATE_CAMPAIGN,
        step_id: step_id,
        team_id: team_id,
    };
    return action;
}



export  {
    setCampaignStore,
    setSelectedTeam,
    updateCampaign
}