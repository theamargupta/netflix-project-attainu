import React, { useEffect } from "react";
import Header from "../../Components/LPHeader";
import TabComponent from "../../Components/TabComponent";
import Footer from "../../Components/LPFooter";
import { useAuth0 } from "@auth0/auth0-react";
import {  useHistory } from "react-router-dom";

const LandingPage = () => {
  const { isAuthenticated } = useAuth0();
  const history = useHistory();
  useEffect(() => {
    isAuthenticated && history.push("/movie");
  }, [history, isAuthenticated]);
  return (
    <div>
      <Header />
      <TabComponent />
      <Footer />
    </div>
  );
};

export default LandingPage;
