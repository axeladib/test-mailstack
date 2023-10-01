/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

//TODO: Import the AuthContext from other file that are for createContext
import AuthContext from "./AuthContext";
import { useContext, useEffect, useState, useSyncExternalStore } from "react";
import { supabase } from "../utils/supabaseClient";

//TODO: Create the login function using supabase auth

const SignIn = (email, password) => {
  //TODO: Destructuring the resukt when calling the supabase signIn function when passing parameter
  const { data, error } = supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};
const AuthProvider = ({ children }) => {
  //TODO: Create the state management for user and auth
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [session, setSession] = useState(null);

  //TODO: Setup the user session and user login with onAuthStateChange that will return event, session
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_UP") {
        setUser(session.user);
        setAuth(true);
      }
    });
    //TODO: Get the user session
    //FIXME : Vulnerable for error
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    //TODO : Create the unsubscribe of user to prevent the memory leakage
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  //TODO: AuthContext.Provider make the value is available for all the component but just providing while useContext make we can manupulate the value
  return (
    <AuthContext.Provider value={{ user, SignIn, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
