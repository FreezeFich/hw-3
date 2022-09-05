import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contacts');
  }
  return (
    <div>
            <h1>Home</h1>
      <div >Contact</div>
      <hr/>
      <div onClick={handleContact}>
        Go ahead and start your app by running npm start, and you should see the Home route when your app starts running. Click the "About" link to see yourroute, and voilà! You've successfully set up React Router using Create React App! 🥳
        When it's time to deploy your app to production, be sure to follow Create React App's instructions on deploying with React Router to be sure your server is configured correctly.
      </div>
    </div>
  )
}

export default SignIn