import "./App.css";
import SearchBar from "./components/SearchBar";
import React, { useState, createContext } from "react";
import VideoList from "./components/VideoList";
import { Outlet } from "react-router-dom";

export const AppContext = createContext();
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
        <SearchBar />
        <Outlet />
        <VideoList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
