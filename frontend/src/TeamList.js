import React from 'react';
import TeamCard from './TeamCard';
import data from './CollegeBasketballTeams.json';

function TeamList() {
  return (
    <div>
      {data.teams.map(team => (
        <TeamCard 
          key={team.tid}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

export default TeamList;
