import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form >
                    <input type="text" name="searchbar" value={this.props.value} onChange={this.props.handleChangeQuery}/>
                </form>
            </div>
        )
    }
}
