import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './content.css'



const Hero = () => {



	return (
		<main className="hero">
			<div className="content">
				<h2>INI ADALAH WEBSITE GALLERY DAN TODOLIST SAYA</h2>
				<h3>Di website ini bisa kamu gunakan untuk menyimpan image kamu sendiri dan membuat todolist</h3>
				<p>Website ini adalah latihan saya sebagai programmer</p>
				<div className="btn">
					<a href="#">Click here >></a>
				</div>
			</div>
		</main>
	)
}





export default Hero