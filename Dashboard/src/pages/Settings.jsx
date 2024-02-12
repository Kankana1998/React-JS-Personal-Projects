import React from 'react'
import Sidebar from '../components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar'
import List from '../settings/List';

function Settings() {
  return (
    <>
    <Navbar />
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <Sidebar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <List />
    </Box>
</Box>
</>
   
  )
}

export default Settings