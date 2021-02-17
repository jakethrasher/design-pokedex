import React, { Component } from 'react'
import './App.css'
import PokeList from './PokeList.js'
import Sort from './Sort.js'
import SearchBar from './SearchBar.js'
import request from 'superagent'
import Spinner from './Spinner'

export default class SearchPage extends Component {
    state={
        pokemon:[],
        sortOrder:'ascending',
        sortBy:'pokemon',
        query:'',
        loading:false,
    }
    fetchPokemon = async ()=>{

        await this.setState({
            loading:true,
        })
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}`)
        
        await this.setState({
            pokemon: data.body.results,
            loading: false,
        })
    }

    componentDidMount = async () =>{
        await this.fetchPokemon()
    }     
       
    handleClick = async () =>{
        await this.fetchPokemon()
}   

    handleSortOrder= async (e)=>{
        this.setState({sortOrder: e.target.value})
        this.fetchPokemon()
    }

    handleChangeType=async(e)=>{
        this.setState({
            sortBy: e.target.value})
            this.fetchPokemon()
    }

    handleChangeQuery=(e)=>{
        this.setState({
            query: e.target.value
        })
    }

render() {

      return (
        <div className='pokedex'>

            <div className='sidebar'>

                <p>Search By Name</p>
                
                <SearchBar handleChangeQuery = {this.handleChangeQuery} value={this.state.query} handleClick={this.handleClick}/>

                <p>Sort By Category</p>

                <Sort handleSort={this.handleChangeType} options={['pokemon','shape','ability_1','type_1']} value={this.state.sortBy} />

                {console.log(this.state.sortBy)}

                <p>Sort Alphabetically</p>
                <Sort handleSort={this.handleSortOrder} options={['ascending', 'descending']} value={this.state.sortOrder}/>

            </div>

            <div className="image-container">

                {this.state.loading ? <Spinner/> :

                <PokeList pokeArray={this.state.pokemon}/>}

            </div>

        </div>
    )
}
}
        
                