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
        sortOrder:'',
        sortBy:'',
        query:'',
        loading:false,
        currentPage:1,
        totalPokemon:'',
        pokePerPage:20,
    }

    fetchPokemon = async ()=>{

        await this.setState({
            loading:true,
        })
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=${this.state.pokePerPage}
        `)
        
        await this.setState({
            pokemon: data.body.results,
            loading: false,
            totalPokemon:data.body.count,
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
        await this.fetchPokemon()
    }

    handleChangeType=async(e)=>{
        await this.setState({
            sortBy: e.target.value})
          await this.fetchPokemon()
    }

    handleChangeQuery=(e)=>{
        this.setState({
            query: e.target.value
        })
    }
    // event handlers for next page and previous page buttons
    handleNextClick=async()=>{
        await this.setState({
            currentPage: this.state.currentPage + 1,
        })
        await this.fetchPokemon()
    }
    handlePreviousClick=async()=>{
        await this.setState({
            currentPage: this.state.currentPage - 1,
        })
        await this.fetchPokemon()
    }
    render() {
    const totalPages =Math.ceil(this.state.totalPokemon / this.state.pokePerPage)
    
      return (
        <div className='pokedex'>

            <div className='sidebar'>

                <p>Search By Name</p>
                
                <SearchBar handleChangeQuery = {this.handleChangeQuery} value={this.state.query} handleClick={this.handleClick}/>

                <p>Sort By Category</p>

                <Sort handleSort={this.handleChangeType} options={['pokemon','shape','ability_1','type_1']} value={this.state.sortBy} />

                <p>Sort Alphabetically</p>
                <Sort handleSort={this.handleSortOrder} options={['ascending', 'descending']} value={this.state.sortOrder}/>

            </div>

            <div className="image-container">
                <div className="button-container">
                    <button className="page-button" onClick={this.handlePreviousClick} disabled={this.state.currentPage===1}>&#9756;</button>
                    <span>Page: {this.state.currentPage}</span>
                    <button className="page-button" onClick={this.handleNextClick} disabled={this.state.currentPage === totalPages}>&#9758;</button>
                </div>
                
                {this.state.loading ? <Spinner/> :
                <PokeList pokeArray={this.state.pokemon}/>}


            </div>

        </div>
    )
}
}
                
        
                