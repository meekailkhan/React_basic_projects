import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/about/About'
import MainLayout from '../layout/MainLayout'
import { ROUTES } from '../constant/routes'
import Service from '../pages/service/Service'
import Project from '../pages/projects/Project'
import Testimonials from '../pages/testimonials/Testimonials'
import { Contact } from '../pages/contact/Contact'


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
    },
    {
      path : ROUTES.PROJECTS,
      element : <MainLayout><Project /></MainLayout>
    },
    {
      path : ROUTES.TESTIMONIALS,
      element : <MainLayout><Testimonials /></MainLayout>
    },
    {
      path : ROUTES.CONTACT,
      element : <MainLayout><Contact/></MainLayout>
    }
  ])
}

export default AppRoutes
