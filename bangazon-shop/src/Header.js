import React, { Component } from 'react';
import './styles/Header.css';
import logo from './images/logo.png';

export default class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">
                    <img src={logo} width="30" height="30" alt="" />
                </a>
                    <button onClick={this.props.logout} className="btn">Logout</button>
            </nav>

        )
    }
}



