import React, {Component} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer"
import Button from "./components/Button";
import {useRoutes} from "hookrouter";
import routes from "./routes";

const App = () => {
    const match = useRoutes(routes);
    return match;
};

export default App;
