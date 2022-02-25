import React from "react";
import { Row, Col, Button } from "antd";
import "./style.less";
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'
import Home from './pages/home'

export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
            <NavLeft/>
        </Col>
        <Col span={20} className="main">
            <Header/>
            <Row className="content">
                {/* <Home/> */}
                {this.props.children}
            </Row>
            <Footer/>
        </Col>
      </Row>
    );
  }
}
