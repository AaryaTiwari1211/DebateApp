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
                                    <Stack direction='row'>
                                        <Grid>
                                        <TextField
                                                required
                                                id="email"
                                                label='Username'
                                                name='email'
                                                autoComplete='email'
                                            />
                                        </Grid>
                                        <Grid></Grid>
                                    </Stack>
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