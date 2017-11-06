import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <div>
                <ul className="NavBar">
                    <li >Home</li>
                    <li >MindMap</li>
                    <li>Ideas</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;