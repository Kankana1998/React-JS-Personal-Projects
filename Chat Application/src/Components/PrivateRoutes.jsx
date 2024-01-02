import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
const PrivateRoutes = () => {

    const user = true

  return (
    <>
      {user ? <Outlet /> : <Nagivate to='/login'/>}
    </>
  )
}

export default PrivateRoutes
