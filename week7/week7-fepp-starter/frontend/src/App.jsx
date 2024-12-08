import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'
// pages & components
import Home from "./pages/HomePage";
import AddJobPage from "./pages/AddJobPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage"
import JobPage from './pages/JobPage'
import EditJobPage from "./pages/EditJobPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { createContext } from "react";

const UserContext = createContext()
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user && user.token ? true : false;
  }

  )
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-job"
              element={isAuthenticated ? (<AddJobPage />) : (<Navigate to="/" />)} />
            <Route path="/jobs/:id" element={<JobPage isAuthenticated={isAuthenticated} />} />
            <Route path="/edit-job/:id"
              element={isAuthenticated ? <EditJobPage /> : (<Navigate to="/" />)} />
            <Route path="/signup" element={!isAuthenticated ?
              (<Signup setIsAuthenticated={setIsAuthenticated} />) : (<Navigate to="/" />)} />
            <Route path="/login" element={!isAuthenticated ?
              (<Login setIsAuthenticated={setIsAuthenticated} />) : (<Navigate to="/" />)} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
