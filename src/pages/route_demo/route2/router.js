import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './../route1/Main'
import About from './../route1/about'
import Topic from './../route1/topic'
import Home from "./Home";

export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <Home>
                    <Routes>
                        <Route path="/" element={<Main/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/topic" element={<Topic/>}></Route>
                    </Routes>
                </Home>
            </Router>
            
        );
    }
}
