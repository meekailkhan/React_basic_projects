import { useRoutes } from "react-router-dom"
import { ROUTES } from "../constant/routes"
import Home from "../pages/Home"
import Create from "../pages/Create"
import Update from "../pages/Update"


function AppRoutes() {
  return useRoutes([
    {
        path : ROUTES.HOME,
        element : <Home />
    },
    {
        path : ROUTES.CREATE,
        element : <Create />
    },
    {
        path :  ROUTES.UPDATE,
        element : <Update />
    }
  ])
  
}

export default AppRoutes
