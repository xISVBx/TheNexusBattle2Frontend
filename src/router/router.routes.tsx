import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import DetailPage from "../pages/detalle/DetailPage";
const router = createBrowserRouter([
    {
        path: "/",
        element:<HomePage/>,
    },
    {
        path:"/carta/:carta/:inventario",
        element: <DetailPage />
    }
])
export default router;