import React from 'react';
import { Row, Col } from "antd";
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'

export default class Header extends React.Component{
    state={}
    componentWillMount(){
        this.setState({
            userName:'河畔一角'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIDate();
    }
    getWeatherAPIDate(){
        let city = '北京';
        axios.jsonp({
            url:'https://free-api.heweather.net/s6/weather/now?location='+encodeURIComponent(city)+'&key=db86a5196f304e52a4369818c5182e60'
        }).then((res)=>{
            debugger;
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render(){
        return (
            <div className='header'>
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
                    <Col span="20" className="weater">
                        <span className="data">{this.state.sysTime}</span>
                        {/* <span className="data">2022</span> */}
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}