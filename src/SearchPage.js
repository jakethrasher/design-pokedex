import React, { Component } from 'react'
import './App.css'
import PokeList from './PokeList.js'
import Sort from './Sort.js'
import SearchBar from './SearchBar.js'
import request from 'superagent'
import Spinner from 'Spinner.js'

export default class SearchPage extends Component {
    state={
        pokemon:[],
        sortOrder:'ascending',
        sortBy:'pokemon',
        query:'',
        loading:'false',
    }
    
    componentDidMount = async () =>{

        await this.setState({
            loading:'true'
        })
        const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')
        
        this.setState({
            pokemon: data.body.results,
            loading: 'false'
        })
        console.log(this.state.pokemon)
    }     
        


    handleSortOrder= (e)=>{
        this.setState({sortOrder: e.target.value})
    }
    handleChangeType=(e)=>{
        this.setState({
            sortBy: e.target.value})
    }
  
    handleChangeQuery=(e)=>{
        this.setState({
            query: e.target.value
        })
    }
   
    render() {
        if(this.state.sortOrder === 'ascending'){
            this.state.pokemon.sort((a,b)=>a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
        }else if(this.state.sortOrder === 'descending'){
            this.state.pokemon.sort((a,b)=>b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
        }

        const filteredData = this.state.pokemon.filter(item=>
            item.pokemon.includes(this.state.query.toLowerCase())

        )
   
        return (
            <div className='pokedex'>

                <div className='sidebar'>
                    <p>Search by name</p>
                    <SearchBar handleChangeQuery = {this.handleChangeQuery} value={this.state.query}/>

                    <p>Sort by type!</p>
                    <Sort handleSort={this.handleChangeType} options={['pokemon','shape','ability_1','type_1']} />

                    <p>Sort alphabetically!</p>
                    <Sort handleSort={this.handleSortOrder} options={['ascending', 'descending']} />

                </div>
                <div className="image-container">
                    {!this.state.loading && <Spinner/>}
                    <PokeList pokeArray={filteredData}/>
                </div>

            </div>
        )
    }
}
