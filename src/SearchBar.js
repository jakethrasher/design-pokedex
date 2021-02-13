import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" name="searchbar" />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
