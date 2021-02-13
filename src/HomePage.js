import React, { Component } from 'react'
import './App.css'
export default class HomePage extends Component {
    render() {
        const main = {
            height: '100%',
            backgroundColor:'#cef',
            paddingTop: '12em'
        }
        return (
            <div style={main}>
                <img src='./pokelogo.svg' alt="logo" style={{width: '70%'}}/>
            </div>
        )
    }
}
