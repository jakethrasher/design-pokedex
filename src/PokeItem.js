import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default class PokeItem extends Component {
    render() {
        const imageItem ={
            margin:'2px',
            padding:'4px',
            borderRadius:'0.5em',
            width:'min-content',
            height:'18em',
            backgroundColor:'#cbc'
        }
        return (
            <div style={imageItem}>
                <Link to={`/search/${this.props.pokeProp['pokemon']}`}>
                    <li><img alt="string" src={this.props.pokeProp['url_image']} className="poke-images"/></li>
                    <p>Pokemon: {this.props.pokeProp['pokemon']}</p>
                    <p>Shape: {this.props.pokeProp['shape']}</p>
                    <p>Ability: {this.props.pokeProp['ability_1']}</p>
                    <p>Type: {this.props.pokeProp['type_1']}</p>
                </Link>
            </div>
        )
    }
}
                