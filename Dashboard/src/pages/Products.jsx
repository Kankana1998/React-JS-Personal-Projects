import React from 'react'
import Sidebar from '../components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar'
import ProductList from './products/ProductList';

function Products() {
  return (
    <>
    <Navbar />
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <Sidebar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <ProductList />
    </Box>
</Box>
</>
   
  )
}

export default Products