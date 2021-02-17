import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                    <input type="text" name="searchbar" value={this.props.value} onChange={this.props.handleChangeQuery}/>

                    <button onClick={this.props.handleClick}>search</button>
            </div>
        )
    }
}
                
            
