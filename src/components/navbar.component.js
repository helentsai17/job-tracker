import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="nav-link" href="#" to="/"> Company List </Link>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#" to="/edit/:id">Company Update</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to="/create">Job Applied</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to="/user">Create user</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );

    }
}