import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm";
import ForgotForm from "./ForgotForm/ForgotForm";
import MainPage from "../MainPage/MainPage";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Cda from "../CDA/CDA";

function Layout() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <RegistrationForm />} />
      <Route path="/Aform" render={() => <AuthorizationForm />} />
      <Route path="/Fform" render={() => <ForgotForm />} />
      <Route path="/Rform" render={() => <RegistrationForm />} />
      <Route path="/MainPage" render={() => <MainPage />} />
      <Route path="/BMenu" render={() => <BurgerMenu />} />
      <Route path="/CDA" render={() => <Cda />} />
    </BrowserRouter>
  );
}
export default Layout;
