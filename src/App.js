import React from 'react';
import { Route, Routes } from "react-router-dom";

import CommunityMain from './components/Community/CommunityMain';
import PostMain from './components/Post/PostMain';
import ProfileMain from './components/Profile/ProfileMain';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<CommunityMain/>}/>
        <Route path="/new_thought" exact element={<PostMain/>}/>
        <Route path="/profile" exact element={<ProfileMain/>}/>
      </Routes>
    </>
  );
}

export default App;
