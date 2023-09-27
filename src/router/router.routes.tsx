import CarritoCompras from "../pages/carritoCompras/carritoCompras";
import Perfil from "../pages/perfil/perfil";
import Banco from "../pages/banco/banco";
import Subasta from "../pages/subasta/subasta";
import Juego from "../pages/juego/juego";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import DetailPage from "../pages/detalle/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path:"/carta",
    element: <DetailPage />,
  },
  {
    path: "/carritoCompras",
    element: <CarritoCompras />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/banco",
    element: <Banco />,
  },
  {
    path: "/subasta",
    element: <Subasta />,
  },
  {
    path: "/juego",
    element: <Juego />,
  },
]);

export default router;
