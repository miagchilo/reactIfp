import React, { useContext } from 'react';
import { AppContext } from '../App';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function VideoList() {
  const Div2 = styled.div`
    margin-top: -30px;
  `;

  const DIV = styled.div`
    background: white;
    padding: 20px;
    width: 30%;
    display: flex;
    text-align: center;
  `;

  const IMG = styled.img`
    width: 430px;
    height: 240px;
    padding-bottom: 20px;
  `;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { searchTerm } = useContext(AppContext);

  console.log(searchTerm);

  const { data, error } = useSWR(
    searchTerm && `https://youtube.thorsteinsson.is/api/search?q=${searchTerm}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  return (
    <Div2>
      {data?.map((video, index) => (
        <DIV classname="leftt">
          <Link to={`videos/${video.id.videoId}`}>
            <li key={index}>
              <IMG src={video.snippet.thumbnails.url} alt="" />
              {video.title}
            </li>
          </Link>
        </DIV>
      ))}
    </Div2>
  );
}

export default VideoList;
