import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import Post from "./components/post/Post";
import Write from "./pages/write/Write";
import Mypage from "./pages/mypage/Mypage";
import View from "./pages/view/View";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/join" exact>
                    <Join />
                </Route>
                <Route path="/post" exact>
                    <Post />
                </Route>
                <Route path="/write" exact>
                    <Write />
                </Route>
                <Route path="/view" exact>
                    <View />
                </Route>
                <Route path="/mypage" exact>
                    <Mypage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
