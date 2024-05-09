import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Community from "./pages/Community";
import BikeTrails from "./pages/BikeTrails";
import NewsPage from "./pages/NewsPage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Questionnaire from "./pages/Questionnaire";
import { Privacy } from "./pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/community", element: <Community /> },
      { path: "/trails", element: <BikeTrails /> },
      { path: "/news", element: <NewsPage /> },
      { path: "/login", element: <Login /> },
      { path: "/questionnaire", element: <Questionnaire /> },
      { path: "/privacy", element: <Privacy /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
