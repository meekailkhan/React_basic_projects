import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/about/About'
import MainLayout from '../layout/MainLayout'
import { ROUTES } from '../constant/routes'
import Service from '../pages/service/Service'


function AppRoutes() {
  return useRoutes([
    {
        path : ROUTES.HOME,
        element : <MainLayout><Home/></MainLayout>
    },
    {
        path : ROUTES.ABOUT,
        element : <MainLayout><About/></MainLayout>
    },
    {
      path : ROUTES.SERVICE,
      element : <MainLayout><Service/></MainLayout>
    }
  ])
}

export default AppRoutes
