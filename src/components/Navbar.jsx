import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/Logo.png'
const Navbar = () => (
    <Stack direction="row" justifyContent="space-around" mt="40px" alignItems="center">
        <Link to="/">
            <img src={Logo} alt="Logo" style={{ width: '60px', margin: '0 15px' }}/>
        </Link>
        <Stack direction="row" fontSize="25px" gap="40px" >
            <Link to="/" style={{ textDecoration: "none", color: 'black'}}>Home</Link>
            <Link to="/Exercises">Exercises</Link>
        </Stack>
    </Stack>
)


export default Navbar