import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import "../App.css";

const Login = () => {

  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();



  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
        <div>
          <button
            className="bg-red-600 "
            onClick={handleGoogleSignIn}
          >sign in </button>
        </div>
    </>
  );
};

export default Login;
