// import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { refreshTokenSetUp } from './RefreshTokenSetUp';


function App() {

  const response = (res) => {
    console.log(res)
    refreshTokenSetUp(res)
  }

  const failResponse = (res) => {
    console.log(`[Login failed]: ${res.error}`)
  }

  const logout = () => {
    console.log('[Logout already]')
  }

  return (
    <div className="App">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_CLIENT_ID}`}
        buttonText="Log in with google"
        onSuccess={response}
        onFailure={failResponse}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        theme="dark"
        approvalPrompt="force"
      />
      <GoogleLogout
        clientId={`${process.env.REACT_APP_CLIENT_ID}`}
        buttonText='Log out'
        onLogoutSuccess={logout}
      />
    </div>
  );
}

export default App;
