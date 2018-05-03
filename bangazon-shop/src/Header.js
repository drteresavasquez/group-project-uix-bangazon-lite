import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Navbar</a>
                    
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}

                    {/* <button className="btn" onClick={()=>{this.props.logout()}}>Logout</button> */}
            </nav>

        )
    }
}



