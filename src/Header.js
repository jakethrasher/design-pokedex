import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>HEADERRRRRRR</h1>
                <Link to='./'>Home Page</Link>
                <Link to="./search">Search Page</Link>
            </div>
        )
    }
}
