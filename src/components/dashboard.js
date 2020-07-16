import React from 'react';
import Campaign from './campaign';
import { unCamelCase } from '../helpers';



function Dashboard({campaign, selectedTeamId, selectedTeamTitle}) {

    const {campaign_name} = campaign;

  return (
      <section className="content">
          <header>
              <h1 className={'title'}>
                  <span className={'title__campaign'}>{campaign_name}</span>
                  {`${selectedTeamTitle && ' - '}`}
                  <span className={'title__team'}>{unCamelCase(selectedTeamTitle)}</span>
              </h1>
          </header>
          <main className="dashboard">
              <Campaign data={campaign} selectedTeamId={selectedTeamId}/>
          </main>
      </section>
  );
}

export default Dashboard;
