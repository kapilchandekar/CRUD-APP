import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import AddEditUser from "./Components/Pages/AddEditUser";
import AddUser from "./Components/Pages/AddUser";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/EditUser/:_id" element={<AddEditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
