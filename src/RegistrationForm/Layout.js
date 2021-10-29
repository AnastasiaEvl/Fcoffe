import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import ForgotForm from "./ForgotForm/ForgotForm";
import MainPage from "../MainPage/MainPage";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Cda from "../CDA/CDA";
import Legal from "../Legal/Legal";
import ContactUs from "../ContactUs/ContactUs";

function Layout() {
    return (
        <BrowserRouter>
            <Route exact path="/" render={() => <MainPage/>}/>
            <Route path="/Aform" render={() => <AuthorizationForm/>}/>
            <Route path="/Fform" render={() => <ForgotForm/>}/>
            <Route path="/Rform" render={() => <RegistrationForm/>}/>
            <Route path="/MainPage" render={() => <MainPage/>}/>
            <Route path="/BMenu" render={() => <BurgerMenu/>}/>
            <Route path="/CDA" render={() => <Cda/>}/>
            <Route path="/Legal" render={() => <Legal/>}/>
            <Route path="/ContactUs" render={() => <ContactUs/>}/>
        </BrowserRouter>
    );
}

export default Layout;
