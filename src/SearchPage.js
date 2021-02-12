import React, { Component } from 'react'
import pokeData from './data.js'
import './App.css'
import PokeList from './PokeList.js'
import Sort from './Sort.js'

export default class SearchPage extends Component {
    state={
        pokemon:pokeData,
        sortOrder:'ascending',
        sortBy:'pokemon',
        filter:'',
    }
    handleSortOrder= (e)=>{
        this.setState({sortOrder: e.target.value})
    }
    handleChangeType=(e)=>{
        this.setState({sortBy: e.target.value})
    }
    render() {
        if(this.state.sortOrder === 'ascending'){
            this.state.pokemon.sort((a,b)=>a.pokemon.localeCompare(b.pokemon))
        }else if(this.state.sortOrder === 'descending'){
            this.state.pokemon.sort((a,b)=>b.pokemon.localeCompare(a.pokemon))
        }
        
        if(this.state.sortBy === 'shape'){
            this.state.pokemon.sort((a,b)=>a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
        }else if(this.state.sortBy === 'ability_1'){
            this.state.pokemon.sort((a,b)=>a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
        }else if(this.state.sortBy === 'type_1'){
            this.state.pokemon.sort((a,b)=>a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
        }
      
        return (
            <div className='pokedex'>
                <div className='sidebar'>
                    <p>Sort by type!</p>
                    <Sort handleSort={this.handleChangeType} options={['pokemon','shape','ability_1','type_1']} />
                    <p>Sort alphabetically!</p>
                    <Sort handleSort={this.handleSortOrder} options={['ascending', 'descending']} />
                </div>

                <div className="image-container">
                    <PokeList pokeArray={pokeData} />
                </div>
               
            </div>
        )
    }
}
