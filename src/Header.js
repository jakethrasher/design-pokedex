import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

export default withRouter (class Header extends Component {
    render() {
        const headerContents={
            backgroundColor: '#fd0',
            height: '5em',
            display: 'flex',
            justifyContent: 'flex-end'
        }
        const linkContainer={
            display:'flex',
            alignItems: 'center',
            width: '12em',
            justifyContent: 'space-between',
            fontSize: '1.5rem',
            fontDecoration: 'none'
        }
        return (
            <div>
                <div style={headerContents}>
                    <div style={linkContainer}>

                        {this.props.location.pathname ==='/search' && <NavLink to='./' style={{textDecoration: 'none'}}>Home</NavLink>}

                        {this.props.location.pathname ==='/' && <NavLink to="./search" style={{textDecoration: 'none'}}>Go To Pokédex</NavLink>}

                    </div>
                </div>
            </div>
        )
    }
})
        