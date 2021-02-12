import React, { Component } from 'react'
import './App.css'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <li><img alt="string" src={this.props.pokeProp['url_image']} className="poke-images"/></li>
                <p>{this.props.pokeProp['pokemon']}</p>
            </div>
        )
    }
}
