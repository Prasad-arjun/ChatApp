import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import LandingPage from "./pages/landingPage";
import LandingPage2 from "./components/LandingPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2500 }, { offset: 50 });
    AOS.refresh();
  }, []);
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage2 />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
