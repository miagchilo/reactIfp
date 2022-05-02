import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlaylistContext } from '../App';
import { UpdatePlaylist } from '../Apis';
import Player from './Player';

function PlayListcom() {
  const { playlistId } = useParams();
  const { data } = useContext(PlaylistContext);
  const [index, setIndex] = useState(0);


  if (!data || !data.videos) {
    return <p>loading...</p>;
  }

  return (
    <aside className="block col-1">
      <h2>{data.name}</h2>
      <p>
        <mark>Playlist id of {playlistId}</mark>
      </p>
      <Player
        id={data.videos[index]}
        playNext={() => {
          if (index + 1 < data.videos.length) {
            setIndex(index + 1);
          }
        }}
      />

      <ul>
        {data.videos.map((item, idx) => (
          <li key={item}>
            <p>{item}</p>
            {idx === index && <mark>PLAYING</mark>}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIndex(idx);
              }}
            >
              Play
            </button>
            <button
              data-testid="button"
              onClick={async (e) => {
                e.preventDefault();

                const videoList = data.videos.filter((idx) => idx !== item);

                await UpdatePlaylist(playlistId, '', videoList);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default PlayListcom;
