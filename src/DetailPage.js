import React, { Component } from 'react'
import request from 'superagent'
import Spinner from './Spinner.js'

export default class DetailPage extends Component {
    state={
        pokemonData:{},
        loading: false,
    }
    componentDidMount= async()=>{
        
        await this.setState({
            loading:true,
        })
        console.log(this.state.loading)       
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`)
        
        this.setState({
            pokemonData: data.body.results.find(item=> item.pokemon === this.props.match.params.pokemonName),
            loading: false,
        })
        
        console.log(this.state.loading)       

        
    }
    render() {
        const style = {
            backgroundColor: '#cef',
            height:'100vh',
            fontSize:'1.3em'
        }
        const pokeName={fontSize:'2em',fontWeight:'bold'}

        return (
            <div>
            {this.state.loading ? <Spinner /> :
                <div style={ style }>
                     <img src={this.state.pokemonData.url_image} alt="pokemon"/>
                     <p style={ pokeName }>{this.state.pokemonData.pokemon}</p>
                     <p>Type: {this.state.pokemonData.type_1}</p>
                     <p>Shape: {this.state.pokemonData.shape}</p>
                     <p>Ability: {this.state.pokemonData.ability_1}</p>
                     <p>Weight: {this.state.pokemonData.weight}</p>
                     <p>Attack: {this.state.pokemonData.attack}</p>
                     <p>Speed: {this.state.pokemonData.speed}</p>
                </div>
            }
            </div>
        )
    }
}
                
               

