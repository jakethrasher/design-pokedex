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
        }
     
        
        return (
            <div>
                Sort pokemon by name alphabetically ascending or descending

               <Sort handleSort={this.handleSortOrder} options={['ascending', 'descending']}/>

               <Sort handleSort={this.handleChangeType} options={['pokemon','shape','ability_1','type_1']}/>

               <PokeList pokeArray={pokeData}/>
            </div>
        )
    }
}
