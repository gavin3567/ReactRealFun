import React from 'react';

function TeamCard(props) {
  return (
    <div>
      <h2>{props.school}</h2>
      <p>Mascot: {props.name}</p>
      <p>Location: {props.city}, {props.state}</p>
    </div>
  );
}

export default TeamCard;