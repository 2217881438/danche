import React from "react";
import { Row, Col } from "antd";
import "./index.less";
import Util from "../../utils/utils";
import axios from "axios";

export default class Header extends React.Component {
  state = {
      weather:{}
  };
  componentWillMount() {
    this.setState({
      userName: "河畔一角",
    });
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime,
      });
    }, 1000);
    this.getWeatherAPIDate();
  }
  getWeatherAPIDate() {
    axios.get("https://devapi.qweather.com/v7/weather/now?location=101010100&key=4d3256340c0345a7b146ded340a62d67")
      .then((res) => {
          if(res.status===200){
            let data = res.data.now;
            // console.log(data)
            this.setState({
              dayPictureUrl: data.dayPictureUrl,
              weather: data,
            });
          }
      });
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎,{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="data">{this.state.sysTime}</span>
            {/* <span className="data">2022</span> */}
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detail">
                <i className={`qi-${this.state.weather.icon}`}></i>
                {this.state.weather.text}
                </span>
          </Col>
        </Row>
      </div>
    );
  }
}
