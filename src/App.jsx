/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
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

function App() {
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <RouterProvider router={router} />
      </div>
    </Container>
}

export default App;
