import React, { useState, createContext } from 'react';
import './App.css';
import VidList from './components/VideoList';
import { Outlet, useNavigate } from 'react-router-dom';
import Form from './components/PlayListForm';
import { CreatePlaylist } from './Apis';
import SearchBar from './components/SearchBar';
import Main from './components/Main';
import PlayListcom from './components/PlayList';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { GetPlaylist } from './Apis';



export const AppContext = createContext();
export const PlaylistContext = createContext();

function App() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { playlistId } = useParams();
  const { data } = useSWR(playlistId, GetPlaylist, {
    refreshInterval: 3000,
  });

  return (
    <div className="App">
      <PlaylistContext.Provider value={{ data, playlistId }}>
        <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
          <Form
            ThisonSubmit={async (name) => {
              const resId = await CreatePlaylist(name);
              navigate(`/${resId.id}`);
            }}
          />
          <div className="row">
            <Main />
            <PlayListcom />
          </div>
          <SearchBar />
          <Outlet />
          <VidList />
        </AppContext.Provider>
      </PlaylistContext.Provider>
    </div>
  );
}

export default App;
