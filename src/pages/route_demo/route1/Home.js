import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Main from './Main'
import About from './about'
import Topic from './topic'

export default class Home extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topic">Topic</Link>
                        </li>
                    </ul>
                    <hr />
                    <Routes>
                        <Route path="/" element={<Main/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/topic" element={<Topic/>}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }
}


