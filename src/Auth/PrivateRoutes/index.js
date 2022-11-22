import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '../../constants'

const PrivateRoutes = () => {
    let auth = localStorage.getItem('ThanhKun21')
  return (
    auth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
  )
}

export default PrivateRoutes