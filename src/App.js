import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import Dashboard from "./components/dashboard";
import SvgSprite from "./components/svgSprite";
import List from "./components/list";
import MenuItem from "./components/menuItem";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setCampaignStore } from "./actions";

import {setSelectedTeam} from './actions';
import Preloader from "./components/preloader";
import { getCurrentTasks } from './helpers'

function App({ campaign, setCampaignStore, setSelectedTeam, selectedTeamId, selectedTeamTitle }) {

    const [ menuItems, setMenuItems ] = useState([]);
    const [ preloader, setPreloader ] = useState(false);
    const getItems =  (cb) => getCurrentTasks(cb)
        .then(data => {
            if (data) {
                setCampaignStore(data);
                data && data.team_instances && data.team_instances[0] && data.team_instances[0].team_id &&
                setSelectedTeam({id:data.team_instances[0].team_id, name:data.team_instances[0].team_name});
                setMenuItems(data.team_instances
                    .filter(item => item.steps.length)
                    .map(item => Object.assign({}, {team_id:item.team_id, team_name:item.team_name})))
            } else {
                console.error(data);
            }
        });

    useEffect(() => {
        getItems(setPreloader);
    }, []);

    return (
    <div className="App" data-test="App">
      <aside className="aside">
          <section className="logo" onClick={() => getItems(setPreloader)}>
              <SvgSprite name="SKEE_MASK_DUATONE"/>
              <div className="btn__wrap">
                  <button className="btn btn__get-items">Monitor new threats</button>
              </div>
          </section>
          <nav className="main">
              <List baseClassName={"menu"}>
                  {menuItems.map((item, i) => <MenuItem name={item.team_name} id={item.team_id} setSelectedTeam={setSelectedTeam} selectedTeamId={selectedTeamId} key={i}/>)}
              </List>
          </nav>
      </aside>
        {preloader
            ? <Preloader />
            : <Dashboard campaign={campaign} selectedTeamId={selectedTeamId} selectedTeamTitle={selectedTeamTitle}/>}
    </div>
  );
}

const mapStateToProps = state => ({
    campaign: state.appData.campaign,
    selectedTeamId: state.appData.selectedTeamId,
    selectedTeamTitle: state.appData.selectedTeamTitle,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setCampaignStore,
    setSelectedTeam
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
