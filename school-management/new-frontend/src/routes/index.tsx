import { ROUTES } from '@/contant/routes'
import MainLayout from '@/layout/MainLayout'
import Bonefied from '@/pages/Bonefied'
import Books from '@/pages/Books'
import Contact from '@/pages/Contact'
import Developer from '@/pages/Developer'
import Gallery from '@/pages/Gallery'
import Home from '@/pages/Home'
import IdCard from '@/pages/IdCard'
import Introduction from '@/pages/Introduction'
import Join from '@/pages/Join'
import Master from '@/pages/Master'
import Notice from '@/pages/Notice'
import Team from '@/pages/Team'
import { useRoutes } from 'react-router-dom'


function AppRoutes() {
  return useRoutes([
    {
        path : ROUTES.HOME,
        element : <MainLayout><Home /></MainLayout>
    },
    {
        path : ROUTES.INTRODUCTION,
        element : <MainLayout><Introduction /></MainLayout>
    },
    {
        path : ROUTES.TEAM,
        element : <MainLayout><Team /></MainLayout>
    },
    {
        path : ROUTES.DEVELOPER,
        element : <MainLayout><Developer/></MainLayout>
    },
    {
        path : ROUTES.GALLERY,
        element : <MainLayout><Gallery /></MainLayout>
    },
    {
        path : ROUTES.IDCARD,
        element : <MainLayout><IdCard /></MainLayout>
    },
    {
        path : ROUTES.BONEFIED,
        element : <MainLayout><Bonefied /></MainLayout>
    },
    {
        path : ROUTES.NOTICE,
        element : <MainLayout><Notice /></MainLayout>
    },
    {
        path : ROUTES.BOOKS,
        element : <MainLayout><Books /></MainLayout>
    },
    {
        path : ROUTES.CONTACT,
        element : <MainLayout><Contact /></MainLayout>
    },
    {
        path : ROUTES.MASTER,
        element : <MainLayout><Master /></MainLayout>
    },
    {
        path : ROUTES.JOIN,
        element : <MainLayout><Join /></MainLayout>
    }

  ])
}

export default AppRoutes
