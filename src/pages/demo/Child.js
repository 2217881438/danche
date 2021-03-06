import React, { Component } from 'react';

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');
    }

    componentWillReceiveProps(newProps){
        console.log('will props' + newProps.name);
    }

    shouldComponentUpdate(){
        console.log('should upate')
        return true;
    }

    componentWillUnmount(){
        console.log('will upate')
    }

    componentDidUpdate(){
        console.log('did upate')
    }

    render(){
        return <div>
            <p>{this.props.name}</p>
        </div>
    }
}