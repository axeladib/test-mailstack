/* existing imports */
// import Root from "./routes/root";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

//FIXME: This is not the problem
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <RouterProvider router={router} />
      </div>
    </Container>
  </React.StrictMode>
);
