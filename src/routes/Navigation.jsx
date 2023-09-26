import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Navigation = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <ItemListContainer />
        }
    ]) 
    return(
        <RouterProvider router={routes}/>
    )
}

export default Navigation