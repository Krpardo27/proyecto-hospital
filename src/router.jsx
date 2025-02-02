import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import EquipoMedico from "./views/EquipoMedico";
import Citas from "./views/Citas";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./views/AdminPanel";
import PanelDoctor from "./views/PanelDoctor";
import AdminPanel from "./views/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPrincipal />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/equipo-medico",
        element: <EquipoMedico />,
      },
      {
        path: "/contacto",
        element: <Citas />,
      },
    ],
  },
  {
    path: "/iniciar-sesion",
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "admin-panel",
        element: <AdminPanel />,
      },
      {
        path: "doctor-panel",
        element: <PanelDoctor />,
      },
    ],
  },
]);

export default router;
