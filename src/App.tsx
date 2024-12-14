import { useState, useEffect } from 'react'
import './App.css'
import { GoogleLogin, GoogleLoginResponse, GoogleLogout, GoogleLoginResponseOffline } from 'react-google-login'
import { gapi } from 'gapi-script'
import { GoogleUserProfileType } from './types/google'

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  const [profile, setProfile] = useState<GoogleUserProfileType | null>(null)
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      }
      )
    }
    gapi.load('client:auth2', initClient)
  }, [])

  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in response) {
      setProfile(response.profileObj)
      console.log('success: ', response)
    } else {
      console.log('offline response: ', response)
    }
  }

  const onFailure = (response: GoogleLoginResponseOffline) => {
    console.log('failure: ', response)
  }

  const logout = () => {
    setProfile(null)
  }

  return (

    <div>
      <h2>React Google Login</h2>
      <br />
      {profile ? (
        <div>
          <img src={profile.imageUrl} alt="" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <br />
          <br />
          <GoogleLogout
            clientId={clientId}
            buttonText='Log out'
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}

    </div>

  )
}

export default App
