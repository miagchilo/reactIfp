import React from 'react';
import Youtube from 'react-youtube';
import styled from 'styled-components';



const Player = ({ id, playNext }) => {
  return (
    <Youtube 
      videoId={id}
      onEnd={playNext}
      opts={{
        playerVars: {
          autoplay: 1,
        },
      }}
    />
  );
};

export default Player;
