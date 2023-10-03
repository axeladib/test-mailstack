/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

function SignIn() {
  //TODO: State management for email, password, loading button, alert show and message and error message
  //TODO: Handle submit with useEffect with supabase
  //TODO: Get the session and user output from the auth function
  //TODO: If the session and user is true go to the home page

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>

            <div className="text-center mt-2">
              <Button type="submit" className="w-50">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          New User? <Link to={"/"}>Register</Link>
        </div>
      </Card>
    </>
  );
}

export default SignIn;
