import React from 'react'
import { Link } from 'react-router-dom'
export default class Main extends React.Component {

    render() {
        return (
            <div>
                this is main page.
                <hr/>
                <Link to="/main/test-id">嵌套路由1</Link>
                <hr/>
                <Link to="/main/456">嵌套路由2</Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}