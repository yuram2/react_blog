import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
// import Join from "./pages/join/Join";
import View from "./pages/view/View";
// import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/View" exact>
                    <View />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
