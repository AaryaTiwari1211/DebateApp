import React from 'react'
import './Login.css'
import { Grid, TextField } from '@mui/material'
import { borderRadius, minWidth, shadows } from '@mui/system';
import { Box } from '@mui/system'
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Avatar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { useState, forwardRef } from 'react';
import { Snackbar } from '@mui/material';
import { Stack } from '@mui/system';
// import {MuiAlert} from '@mui/material/Alert'
import { Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [remember,setRemember] = useState(false)
    const boxstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%,-50%)",
        bgcolor: 'info.main',
        width: '75%',
        height: '70%',
        boxShadow: 24,
    };
    const center = {
        position:'relative',
        top: '50%',
        left: '37%',
    };
    const darktheme = createTheme({
        palette: {
            mode: 'dark'
        },
    })
    return (
        <div className='main_login'>
            <Box sx={boxstyle}>
                <Grid container>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Box style={{
                            backgroundImage: 'url(./login-image2.jpg)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            marginTop: '80px',
                            marginLeft: '15px',
                            marginRight: '15px',
                            marginBottom: '30px',
                            height: '60vh',
                        }}></Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Box style={{
                            backgroundSize: 'cover',
                            height: '70vh',
                            minHeight: '500px',
                            backgroundColor: '#2d416b',
                        }}>
                            <ThemeProvider theme={darktheme}>
                                <Container>
                                    <Box height={35} />
                                    <Box sx={center}>
                                        <Avatar sx={{
                                            ml: '35px',
                                            mb: '4px',
                                            bgcolor: '#ffffff',
                                        }}>
                                            <LockOutlinedIcon />
                                        </Avatar>
                                        <Typography component='h1' variant='h4' sx={{ color: '#ffffff', }}>
                                            Log In
                                        </Typography>
                                    </Box>
                                    <Box height={35} />
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label='Username'
                                                name='email'
                                                autoComplete='email'
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box height={10} /> 
                                    <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
                                        <TextField
                                            required
                                            fullWidth
                                            type='password'
                                            id="password"
                                            label='Password'
                                            name='password'
                                            autoComplete='password'
                                        />
                                    </Grid>
                                    <Box height={10} /> 
                                    <Grid item xs={12} sx={{ ml: '3em', mr: '3em', color: '#ffffff' }}>
                                        <Stack direction='row' spacing={2}>
                                            <FormControlLabel sx={{ width: '60%', }}
                                                onClick={()=>setRemember(!remember)}
                                                control={<Checkbox checked={remember}/>}
                                                label='Remember Me'
                                            />
                                            <Typography variant='body1'
                                                component='span'
                                                onClick={()=>{
                                                    navigate('/reset-password')
                                                }}
                                                style={{
                                                    marginTop: '10px',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                            Forgot Password?
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Box height={10} /> 
                                    <Grid item xs={12} sx={{ ml: '3em', mr: '3em', textAlign:'center'}}>
                                        <Button
                                            type='submit'
                                            fullWidth
                                            variant='contained'
                                            size='medium'
                                            sx={{
                                                ml:'10px',
                                                mr:'20px',
                                                borderRadius: 28,
                                                color: '#ffffff',
                                                minWidth: '170px',
                                                backgroundColor: '#ff9a01',
                                            }}
                                        >
                                            Log In
                                        </Button>
                                    </Grid>
                                    <Box height={10} /> 
                                    <Grid item xs={12} sx={{ ml: '3em', mr: '3em', textAlign:'center'}}>
                                        <Stack direction='row' spacing={1}>
                                            <Typography
                                                variant='body1'
                                                component='span'
                                                style={{
                                                    marginTop:'10px',
                                                }}

                                            >
                                                Not Registered Yet?{" "}
                                                <span
                                                    style={{color:'#beb4fb',cursor:'pointer'}}
                                                    onClick={()=>{
                                                        navigate('/signup')
                                                    }}
                                                >
                                                    Create an Account
                                                </span>

                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Container>
                            </ThemeProvider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Login