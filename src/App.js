import React from 'react'
import LoginPage from './page/login'
import HomePage from './page/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'




function App() {


	function User() {
		return (
			<div>Home Page</div>
		)
	}


	return (
		
	<BrowserRouter>
	  <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<User />} /> 
      </Routes>
    </BrowserRouter>

	
		
	)
}


export default App