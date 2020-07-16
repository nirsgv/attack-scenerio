import React from 'react';
import Team from "./team";

function Campaign ( {data, selectedTeamId} ) {
  const {team_instances, campaign_instance_id, campaign_name} = data;

  const selected = team_instances && team_instances.filter(item => item.team_id === selectedTeamId);

  return (
    <>
        {selected && <Team instance={selected[0]} />}
    </>
  );
}

export default Campaign;
