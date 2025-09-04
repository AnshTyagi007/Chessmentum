// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthLayout from "./Components/AuthLayout"
import LandingPage from "./Pages/LandingPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
