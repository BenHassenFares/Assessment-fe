import { Box, Button, TextField, Typography } from '@mui/material'
import google from '../../Images/google.png'
import logo from '../../Images/logoF.png'
import imgF from '../../Images/imgF.png'
import './style.scss'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()
  const homepage = () => navigate('/')
  const register = () => navigate('/sign-up')
  const landing = () => navigate('/dashboard')
  return (
    <div className="signin">
      <div className="signin-left">
        <div className="signin-left-card">
          <img className="image" src={logo} alt="a"></img>
          <Box className="section">
            <div className="section-title">Sign In</div>
            <div className="section-subtitle">
              Hi there! Nice to see you again.
            </div>
          </Box>
          <div className="form">
            <div className="label-email">Email</div>
            <TextField
              id="standard-basic"
              variant="standard"
              className="email"
            />
            <div className="label-pwd">Password</div>

            <TextField id="standard-basic" variant="standard" className="pwd" />
          </div>
          <div className="buttons">
            <Button className="buttons-main-btn" onClick={landing}>
              Sign in
            </Button>
            <Button
              className="buttons-google-btn"
              startIcon={
                <img
                  src={google}
                  alt="google"
                  className="buttons-google-btn-img"
                />
              }
            >
              Continue with Google
            </Button>
            <div className="text-forgot-pwd">Forgot Password ?</div>

            {/* <div className="text-forgot-pwd" onClick={''}>Forgot Password ?</div> */}
            {/* <Typography variant="body1" component={Link} to="/forgot-password" className="text-forgot-pwd">
    Forgot Password?
  </Typography> */}
          </div>
          <div className="text">
            <div className="text-tt">Not a memeber?</div>
            <div className="text-sign-up" onClick={register}>
              {' '}
              Sign up
            </div>
          </div>
        </div>
      </div>
      <div className="signin-right">
        <img className="signin-right-img" src={imgF} alt="aa"></img>
        <Typography
          className="signin-right-description"
          fontFamily={'Aldrich'}
          fontSize={'25px'}
          letterSpacing={'0.02em'}
        >
          With TestRoom's AI- based cheating prevention and fraud detection
          software, you can make smarter hiring decisions and start building
          winning teams today!
        </Typography>
        <Button
          onClick={homepage}
          variant="outlined"
          style={{
            color: '#35424a',
            borderColor: '#35424a',
            fontFamily: 'Aldrich',
          }}
        >
          Read more{' '}
        </Button>
      </div>
    </div>
  )
}
export default SignIn
