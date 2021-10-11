import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm";
import ForgotForm from "./ForgotForm/ForgotForm";

function Layout() {
  return (
    <BrowserRouter>
      <Route exact path="/Rform" render={() => <RegistrationForm />} />
      <Route path="/Aform" render={() => <AuthorizationForm />} />
      <Route path="/Fform" render={() => <ForgotForm />} />
    </BrowserRouter>
  );
}
export default Layout;
