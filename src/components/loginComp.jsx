import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import Logo from '../../public/Loginlogo.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const LoginComp = () => {
  return (
    <div>
     
      <Box sx={{ background: '#B744FE', height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Box sx={{ pt: '1rem', height: '200px', width: '150px' }}>
          <img src={Logo} style={{ width: '100%', height: '100%' }} alt='logo' />
        </Box>

        <Typography fontFamily='Rubik' fontSize='36px' fontWeight='500' >Hotel Name</Typography>

        <Box sx={{ background: '#517FD9', height: '250px', width: '425px', borderRadius: '6px' }}>
          <Typography fontFamily='Rubik' fontSize='20px' fontWeight='500' sx={{ p: '1rem' }}>Login</Typography>

          <TextField sx={{ width: '300px', height: '50px', marginLeft: '1rem', background: '#fff', "& fieldset": { border: 'none' }, borderRadius: '10px' }} placeholder='Username' InputProps={{ border: 'none', background: '#fff', }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <TextField sx={{ width: '300px', height: '50px', marginLeft: '1rem', mt: '0.5rem', background: '#fff', "& fieldset": { border: 'none' }, borderRadius: '10px' }} placeholder='Password' InputProps={{ border: 'none', background: '#fff', }} />
            <Box sx={{ display: 'grid', placeItems: 'center', background: '#FFF96D', width: '50px', height: '50px', borderRadius: '10px',mt: '0.5rem' ,cursor:'pointer'}}>
              <ArrowForwardIcon />
            </Box>
          </Box>
        </Box>
          <Typography align='right' fontSize='13px' color='#f3f6f9'sx={{p:'1rem 1rem'}} fontWeight='600'>Powered by <span  style={{color:'#FFF96D' ,fontSize:'25px', fontWeight:'600'}}>BREAKFAST BUDDY</span></Typography>
      </Box>
    </div>
  )
}

export default LoginComp
