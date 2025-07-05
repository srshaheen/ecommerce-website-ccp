import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <CartPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "product/:id", element: <ProductDetailsPage /> },
    ],
  },
]);

export default router;
