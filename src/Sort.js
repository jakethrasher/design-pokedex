import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        

        return (
            <div>
                 <select onChange={this.props.handleSortOrder}>
                   {this.props.options.map(option=>{
                       return <option value={option}>{option}</option>
                   })}
                </select> 

                <select onChange={this.props.handleChangeType}>
                    {this.props.options.map(pokeObject=>{
                        return <option value = {pokeObject['type_1']}>{pokeObject['type_1']}</option>
                    })}
                </select> 
            </div>
        )
    }
}
