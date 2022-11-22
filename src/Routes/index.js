import Admin from "../Auth/Admin"
import { ROUTES } from "../constants"
import HomePage from "../pages/HomePage"
import ProductPage from "../pages/Products"
import ProductDetail from "../pages/Products/Detail"

const publicRoutes = [
{
    path:'/',component: HomePage
},
{
    path:ROUTES.PRODUCT_PAGE,component:ProductPage
},
{
    path:ROUTES.PRODUCT_DETAIL,component:ProductDetail
},
{
    path:ROUTES.ADMIN,component:Admin,layout:null
}
]
const PrivateRoutes = [

]
export {publicRoutes,PrivateRoutes}