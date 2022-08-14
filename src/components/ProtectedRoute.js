import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const [authState, setAuthState] = useState({
    isSignedIn: false,
    pending: true,
    user: null,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthState({ user, pending: false, isSignedIn: !!user });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (!user && !authState.pending) {
    return <Navigate to="/new" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
