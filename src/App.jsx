import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./Layout/MainLayout";

// pgeas
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

// components
import ProtectedRotes from "./components/ProtectedRotes";
import Navbar from "./components/Navbar";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRotes user={true}>
          <MainLayout />
        </ProtectedRotes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
