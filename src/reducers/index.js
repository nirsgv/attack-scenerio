import { combineReducers } from 'redux';
export const SET_CAMPAIGN = 'SET_CAMPAIGN';
export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';
export const SET_SELECTED_TEAM = 'SET_SELECTED_TEAM';


const initialAppState = {
    campaign: {},
    selectedTeamId: '',
    selectedTeamTitle: '',
};

function appData(state = initialAppState, action) {
    switch (action.type) {

        case SET_CAMPAIGN:
            return {
                ...state,
                campaign: action.payload
            };

        case SET_SELECTED_TEAM:
            return {
                ...state,
                selectedTeamId: action.payload.id,
                selectedTeamTitle: action.payload.name
            };

        case UPDATE_CAMPAIGN:

            const updatedTeamInstances = Object.assign(
                {}, state.campaign.team_instances.map(team_instance => { console.log(team_instance.team_id,action.team_id)
                   return( team_instance.team_id == action.team_id ? Object.assign({}, 55) : 44)
                }
            ));
            // console.log(action.step_id);
            console.log(action.team_id);
            // console.log(updatedTeamInstances);

            return {
                ...state,
                // campaign: action.payload
            };


        default:
            return state
    }
}

const rootReducer = combineReducers({
    appData
});

export default rootReducer;