import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        const headerContents={
            display:'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
        }
        return (
            <div>
                <div style={headerContents}>
                    <h1>Pokédex</h1>
                    <div>
                        <Link to='./'>Home Page</Link>
                        <Link to="./search">Search Page</Link>
                    </div>
                </div>
            </div>
        )
    }
}
        