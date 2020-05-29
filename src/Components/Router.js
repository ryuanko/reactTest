import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import Home from "Routes/Home";
import Detail from "Routes/Detail";
import tv from "Routes/TV";
import Search from "Routes/Search";

import Header from "Components/Header"

export default () => (
    <Router>
        <>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} /> 
            <Route path="/movie/:id" component={Detail} />
            <Route path="/tv/:id" component={Detail} />
            <Route path="/tv" component={tv} />
            <Redirect from="*" to="/"/>
        </Switch>
        </>
    </Router>
);
// 이런, About 컴포넌트가 중복됐군요.
// 어떻게 해결해야할까요? 네. exact 를 사용하면 되겠죠? 이를 해결하는 또 다른 방법이있습니다. 바로 Switch 컴포넌트를 사용하는건데요, 라우트들을 이 컴포넌트에 감싸면 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않습니다.