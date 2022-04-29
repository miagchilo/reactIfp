import React, { useContext } from 'react';
import { AppContext, PlaylistContext } from '../App';
import styled from 'styled-components';
import { SearchVid } from '../Apis';
import { UpdatePlaylist } from '../Apis';
import useSWR from 'swr';

export const VidList = styled.div`
  margin-top: -30px;
  margin-left: 800px;
  width: 100%;
  // align-items: center;
`;

export const VidItem = styled.div`
  
  padding: 20px;
  width: 30%;
  list-style: none;
  color: black;
`;

export const VidThumbnail = styled.img`
  width: 430px;
  height: 240px;
  padding-bottom: 20px;
`;

export const AddtoListbtn = styled.button`
  margin: 10px;
  width: 120px;
  margin-bottom: 61px;
  height: 40px;
 
  color: black;
  font-size: 15px;
`;

function VideoList() {
  const { searchTerm } = useContext(AppContext);
  const { data: playlistData, playlistId } = useContext(PlaylistContext);

  const { data, error } = useSWR(searchTerm, SearchVid);

  if (error) return <div>failed to load</div>;

  if (!playlistData) {
    return <p>loading...</p>;
  }

  return (
    <VidList>
      {data?.map((video, index) => (
        <VidItem classname="leftt">
          <p key={index}>
            <VidThumbnail src={video.snippet.thumbnails.url} alt="" />
            {video.title}
            &nbsp;
            <AddtoListbtn
              type="submit"
              onClick={async (e) => {
                e.preventDefault();

                const videoList = [...playlistData.videos, video.id.videoId];

                await UpdatePlaylist(playlistId, '', videoList);
              }}
            >
              Add to Playlist
            </AddtoListbtn>
          </p>
        </VidItem>
      ))}
    </VidList>
  );
}

export default VideoList;
