import React, {useState} from 'react'
import './login.css'

const Login = () => {
	const [email, setEmail] = useState('')


	function handleEmail(e) {
		setEmail(e.target.value)
	}
	function handlePassword(e) {
		setEmail(e.target.value)
	}

	console.log(email)

	return (
		<div className="container">
			<div className="bg"></div>
			<div className="content">
				<div className="log-content">
						<div className="container-form">
							<form>
							    <h2>LOGIN</h2>
								<div className="email">
									<label>Email</label>
									<input 
									type="email" 
									name="email" 
									onChange={handleEmail} />
									<p>Email salah</p>
								</div>
								<div className="password">
									<label>Password</label>
									<input 
									type="password" 
									name="password"
									onChange={handlePassword}
									 />
									}
									<p>Password salah</p>
								</div>
								<button type="submit">Submit</button>
							</form>
						</div>
				</div>
			</div>
		</div>
	)
}


export default Login