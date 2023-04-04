
import React, { useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material/';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { onGetLogin } from '../../action';

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Logo from '../../../images/logo.svg';
import Wave from '../../../images/wave1.png';
import Background from '../../../images/background-image.jpg';
import styled from 'styled-components';
import './LoginDesign.css';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/Auth';
import Footer from '../../templates/Footer';
import LoadingButton from '@mui/lab/LoadingButton';
const BackgroundImage = styled.div`
    height: 648px;
    display: block;
    position: relative;
    &:before{
        content: "";
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute; 
        background-image: url(${Background});
    }
`;

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState('Submit');

    const auth = useAuth();


    const handleSubmit = (e) => {
        auth.loginWebuser(username)
        setLoading('onLoading');
        e.preventDefault();
        if (validate()) {
            dispatch(onGetLogin(username, password));
            setTimeout(() => {
                let userData = JSON.parse(sessionStorage.getItem('userData'));
                if (userData) {
                    navigate("/timesheet");
                } else {
                    setLoading('Submit');
                    toast.error('Invalid Username and Password', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            }, 3000);
        }
    }

    const validate = () => {

        let result = true;

        if (username == '' || username == null) {
            result = false;
            toast.warn('Please Enter Username', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        if (password == '' || password == null) {
            result = false;
            toast.warn('Please Enter Password', {
                position: toast.POSITION.TOP_CENTER
            });
        }

        return result;
    }
    return (
        <BackgroundImage>
            <div>
            <div style={{ width: '30%', position: 'absolute', marginTop: '30px', marginRight: 'auto', marginLeft: 'auto', left: '0', right: '0', }} className='containter'>
                <Card sx={{ padding: '20px', boxShadow: '0px 0px 10px 1px rgb(164, 144, 124)', background: `url(${Wave}) bottom no-repeat`, height: '500px', backgroundSize: '100% 100%' }}>
                    <div className="row" style={{ marginTop: '50px', marginBottom: '100px' }} >
                        <div>
                            <img src={Logo} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100px', height: '100px' }} />
                            <h2 id="welcome" style={{color: 'rgb(237,228,228)'}}>WELCOME</h2>
                        </div>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <TextField id="username" label="Username" variant="outlined"
                                type="text"
                                onChange={e => setUsername(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon sx={{color: 'white'}}/>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ width: '100%', color: 'white'}}
                                autoComplete="off"
                            />
                            <br />
                            <br />
                            <TextField id="password" label="Password" variant="outlined"
                                type={showPassword ? "text" : "password"}
                                onChange={e => setPassword(e.target.value)}
                                sx={{ width: '100%' }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon sx={{color: 'white'}} />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <br />
                            <br />
                                {loading == 'Submit' ? <Button type="submit" variant="contained" sx={{ marginTop: '10px', width: '100%' }} >Submit</Button> : <LoadingButton loading variant="contained" sx={{ marginTop: '10px', width: '100%' }}  >Submit</LoadingButton>}
                        </form>
                    </div>
                </Card>
                
            </div>
            <Footer />
            </div>
        </BackgroundImage>
    );
};

export default Login;