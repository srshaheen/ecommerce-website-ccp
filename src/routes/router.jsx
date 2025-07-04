import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

export default router;
