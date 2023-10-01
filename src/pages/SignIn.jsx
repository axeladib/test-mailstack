/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function SignIn() {
  //TODO: Create the reference for temporary storage for email and password
  const email = useRef(null);
  const password = useRef(null);
  //TODO: Create the state hook for message, errorMessage, loading
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  //TODO: Create and initialise the navigate and login
  const navigate = useNavigate();
  //TODO: Access the login fucntion in AuthProvider
  const { SignIn } = useAuth();

  //TODO: Create the handleSubmit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    //TODO: Check all the field is field or not
    try {
      setErrorMessage("");
      setLoading(true);
      if (email.current?.value || password.current?.value) {
        setErrorMessage("Please fill all the field");
        return;
      }
      //TODO: After all the field is check completed field, passsed the password and email current value to the login function from useAuth and track the data and error using destructuring method
      //TODO: Start apply the logic and apply the try/catch block
      const userData = await SignIn(
        email.current.value,
        password.current.value
      );
      //FIXME : Probem with destrucuting
      const { data, error } = userData;
      const { user, session } = data;
      //TODO: Check if error then setMessage to error.message
      if (error) {
        setErrorMessage(error.message);
      }
      //TODO: If the user and session is valid navigate to the the home page
      if (user && session) {
        navigate("/");
      }
    } catch (error) {
      //TODO: If the email or password incorrect detected then at catch block error setMessage
      console.log("Email or password incorrect");
    }
  };

  //FIXME: This is not the problem
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={email} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={password} required />
            </Form.Group>
            {errorMessage && (
              <Alert
                variant="danger"
                onClose={() => setErrorMessage("")}
                dismissible
              >
                <Alert.Heading>{errorMessage}</Alert.Heading>
                <p>Awww there is something wrong</p>
              </Alert>
            )}
            <div className="text-center mt-2">
              <Button disabled={loading} type="submit" className="w-50">
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
