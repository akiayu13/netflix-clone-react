import { Fragment } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import LandingPage from "./pages/LandingPage";
import Signup1 from "./pages/SignUp/Signup1";
import Signup2 from "./pages/SignUp/Signup2";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <Fragment>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/new" element={<LandingPage />} />
          <Route path="/nowWatching" element={<MovieDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup1 />} />
          <Route path="/signup/1" element={<Signup1 />} />
          <Route path="/signup/2" element={<Signup2 />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
