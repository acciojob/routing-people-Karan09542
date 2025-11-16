
import React from "react";
import './../styles/App.css';
import UserList from "./USerList";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/users/:id" element={<UserDetails/>}/>
        </Routes>
    </div>
  )
}

export default App
