/* eslint-disable no-unused-vars */
//FIXME: This is not the problem
import { useRef, useState } from "react";
import { Alert, Card, Form, Button } from "react-bootstrap";
import { supabase } from "../utils/supabaseClient";
import { Link } from "react-router-dom";
function SignUp() {
  //TODO: Create initial value reference for email, password and comfirmPassword
  const email = useRef(null);
  const password = useRef(null);
  const comfirmPassword = useRef(null);
  //TODO: Create state management for err message, message, loading
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //TODO: Create the function for register using the supabase auth.signup
  //FIXME: Error Message : " Cannot destructure property 'data' of '(intermediate value)' as it is undefined. "
  const SignUp = (email, password) => {
    const { data, error } = supabase.auth.signUp({ email, password });
    return { data, error };
  };
  //TODO: Create the function for handleSubmit when the user click submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
    //TODO: handleSubmit> check if all the form element is been filled by the user using if statement and chaining to check the value of all element
    if (
      !email.current?.value ||
      !password.current?.value ||
      !comfirmPassword.current?.value
    ) {
      //TODO: If the error detected, return the error inside the errorMessage variable
      setErrorMessage("Please fill all the fields");
      return;
    }
    //TODO: Check also if the password and comfirmPassword is not match
    if (password.current?.value != comfirmPassword.current?.value) {
      setErrorMessage("Password does not match");
      return;
    }
    //TODO: This when we passed all the email and password to the API and use try/catch block
    //TODO: After all the 2 condition is checked, then use the registed function to pass the email and password to the supabase signup function
    //TODO: Check if there is error or not , if error return error message if not return successful statement
    try {
      setErrorMessage("");
      setLoading(true);
      //FIXME: Error Message : " Cannot destructure property 'data' of '(intermediate value)' as it is undefined. "
      const user = await SignUp(email.current.value, password.current.value);
      const { data, error } = user;
      if (!error && data) {
        setMessage("SignUp successful please check your email inbox");
      }
    } catch (error) {
      setErrorMessage(
        `Error in creating account. Check this error ${error.message}`
      );
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={handleSubmit}>
            {/* TODO: Email field */}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={email}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            {/* TODO: Password field */}
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                ref={password}
                required
              />
            </Form.Group>
            <Form.Group id="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={comfirmPassword}
                placeholder="Enter the password again"
                required
              />
            </Form.Group>
            {/* TODO: Check if there is an error when signup is unsuccessful */}
            {errorMessage && (
              <Alert
                variant="danger"
                onClose={() => setErrorMessage("")}
                dismissible
              >
                <Alert.Heading>
                  {" "}
                  Aww there is something wrong when creating account
                </Alert.Heading>
                <p>{errorMessage}</p>
              </Alert>
            )}
            {/* TODO: Check if the signup sucessfull and return the message */}
            {message && (
              <Alert
                variant="success"
                onClose={() => setMessage("")}
                dismissible
              >
                <Alert.Heading> Welcome to Mailstack</Alert.Heading>
                <p>{message}</p>
              </Alert>
            )}

            {/* //TODO: Submit button */}
            <div className="text-center mt-2">
              <Button disabled={loading} type="submit" className="w-50">
                Register
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      {/* //TODO: Go to the login page */}
      <div className="w-100 text-center mt-2">
        Already a User? <Link to={"/login"}>Login</Link>
      </div>
    </>
  );
}

export default SignUp;
