import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/public/Home";
import Dashboard from "./pages/app/Dashboard";

const router = createBrowserRouter([
  {
    element: <PublicLayout />, // Public routes
    children: [
      { path: "/", element: <Home /> },
    ],
  },
  {
    element: <AppLayout />, // Private/App routes
    children: [
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
