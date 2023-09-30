/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

//TODO: Create the reference for temporary storage for email and password
 //TODO: Create the state hook for message, errorMessage, loading
  //TODO: Create and initialise the navigate and login
   //TODO: Access the login fucntion in AuthProvider
   //TODO: Create the handleSubmit function
   //TODO: Check all the field is field or not
   //TODO: After all the field is check completed field, passsed the password and email current value to the login function from useAuth and track the data and error using destructuring metho
   //FIXME : Probem with destrucuting
   //TODO: Start apply the logic and apply the try/catch block
   //TODO: Check if error then setMessage to error.message
   //TODO: If the user and session is valid navigate to the the home page
   //TODO: If the email or password incorrect detected then at catch block error setMessage



   function SignIn() {
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
