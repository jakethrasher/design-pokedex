import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

export default withRouter (class Header extends Component {
    render() {
        const headerContents={
            backgroundColor: '#fd0',
            height: '5em',
            display: 'flex',
            alignItems:'center',
            justifyContent: 'space-evenly',
            fontSize: '1.5rem',
        }
        return (
            
                <div style={headerContents}>
                    
                        {this.props.location.pathname !=='/' && <NavLink to='/' style={{textDecoration: 'none'}}>Home</NavLink>}

                        {this.props.location.pathname !=='/search' && <NavLink to="/search" style={{textDecoration: 'none'}}>Go To Pokédex</NavLink>}

                </div>
            
        )
    }
})
                                                 