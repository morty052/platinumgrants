import { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import {
  Home,
  ApplicationPage,
  ApplicationComplete,
  AboutUs,
  Login,
  ApplicationStatus,
} from "./pages";

import { Layout, ApplicationOnboarding } from "./components";
import ApplicationVerification from "./pages/apply/ApplicationVerification";

function App() {
  const [count, setCount] = useState(0);

  const PublicRoutes = ({ children }) => {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  };

  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
        <Route path="/onboarding/*" element={<ApplicationOnboarding />} />
        <Route path="/applicant/:id" element={<ApplicationComplete />} />
        <Route
          path="/applicationstatus/verify/:id"
          element={<ApplicationVerification />}
        />
        <Route path="/applicationstatus/:id" element={<ApplicationStatus />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
