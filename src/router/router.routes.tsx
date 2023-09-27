import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../pages/detalle/DetailPage";
import HomePage from "../pages/home/HomePage";
const router = createBrowserRouter([
    {
        path: "/",
        element:<HomePage/>,
    },
    {
        path:"/carta",
        element: <DetailPage />,
    }
])
export default router;