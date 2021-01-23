import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>Header</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/feed">Feed</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header