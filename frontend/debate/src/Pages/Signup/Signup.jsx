import React from 'react'
import './Signup.css'
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

function SignUp() {
    const navigate = useNavigate()
    const [remember, setRemember] = useState(false)
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
        position: 'relative',
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
                                    <Box height={20} />
                                    <Box sx={center}>
                                        <Avatar sx={{
                                            ml: '35px',
                                            mb: '4px',
                                            bgcolor: '#ffffff',
                                        }}>
                                            <LockOutlinedIcon />
                                        </Avatar>
                                        <Typography component='h1' variant='h4' sx={{ color: '#ffffff', }}>
                                            Sign Up
                                        </Typography>
                                    </Box>
                                    <Box height={20} />
                                    <Stack direction='row' sx={{
                                        display: 'flex',
                                        justifyContent: 'space-evenly'
                                    }}>
                                        <Grid sx={{
                                            ml: '10px',
                                            mr: '30px',
                                        }}>
                                            <TextField
                                                required
                                                id="firstname"
                                                label='First Name'
                                                name='firstname'
                                                autoComplete='firstname'
                                            />
                                        </Grid>
                                        <Grid sx={{
                                            mr: '30px',
                                            ml: '30px',
                                        }}>
                                            <TextField
                                                required
                                                id="lastname"
                                                label='Last Name'
                                                name='lastname'
                                                autoComplete='lastname'
                                            />
                                        </Grid>
                                        <Grid></Grid>
                                    </Stack>
                                    <Box height={20} />
                                    <Grid item xs={12} sx={{ ml: '1em', mr: '3em' }}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="username"
                                            label='Username'
                                            name='username'
                                            autoComplete='username'
                                        />
                                    </Grid>
                                    <Box height={20} />
                                    <Grid item xs={12} sx={{ ml: '1em', mr: '3em' }}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            type='email'
                                            label='Email'
                                            name='email'
                                            autoComplete='email'
                                        />
                                    </Grid>
                                    <Box height={20} />
                                    <Stack direction='row' sx={{
                                        display: 'flex',
                                        justifyContent: 'space-evenly'
                                    }}>
                                        <Grid sx={{
                                            ml: '10px',
                                            mr: '30px',
                                        }}>
                                            <TextField
                                                required
                                                id="password"
                                                type='password'
                                                label='Password'
                                                name='pass1'
                                                autoComplete='password'
                                            />
                                        </Grid>
                                        <Grid sx={{
                                            mr: '30px',
                                            ml: '30px',
                                        }}>
                                            <TextField
                                                required
                                                id="confirm_pass"
                                                label='Confirm Password'
                                                type='password'
                                                name='pass2'
                                                autoComplete='confirm_pass'
                                            />
                                        </Grid>
                                    </Stack>
                                    <Box height={20} />
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
                                            Register
                                        </Button>
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

export default SignUp