import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        
        return (
            <div>
                 <select onChange={this.props.handleSort} value={this.props.value}>
                   {this.props.options.map(option=>{
                       return <option value={option} key={option}>{option}</option>
                   })}
                </select> 
            </div>
        )
    }
}
