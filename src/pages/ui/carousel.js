import React from 'react'
import {Card,Carousel} from 'antd'
import './ui.less'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const contentStyle2 = {
    height: '240px',
    width: '100%',
}

export default class Carousels extends React.Component{

    render(){
        return (
            <div className='main-wrap'>
                <Card title="文字背景轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div><h3 style={contentStyle}>Ant Motion Banner - React</h3></div>
                        <div><h3 style={contentStyle}>Ant Motion Banner - Vue</h3></div>
                        <div><h3 style={contentStyle}>Ant Motion Banner - Angular</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="slider-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <img style={contentStyle2} src="/carousel-img/carousel-1.jpg" alt=""/>
                        </div>
                        <div>
                            <img style={contentStyle2} src="/carousel-img/carousel-2.jpg" alt="" />
                        </div>
                        <div>
                            <img style={contentStyle2} src="/carousel-img/carousel-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}