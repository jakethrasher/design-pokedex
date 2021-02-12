import React, { Component } from 'react'
import pokeData from './data.js'
import './App.css'
import PokeList from './PokeList.js'
import Sort from './Sort.js'

export default class SearchPage extends Component {
    state={
        pokemon:pokeData,
        sortOrder:'',
        sortByType:['grass','fire','water','bug','normal'],
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
        return (
            <div>
                Sort pokemon by name alphabetically ascending or descending
               <Sort handleSortOrder={this.handleSortOrder} options={['ascending', 'descending']}/>
               

               <PokeList pokeArray={pokeData}/>
            </div>
        )
    }
}
