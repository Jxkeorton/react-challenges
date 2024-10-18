import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names: importedNames
      }
    }

    handelChange = (event) => {
        const inputValue = event.target.value.toLowerCase()
        const filteredNames = importedNames.filter(name => name.toLowerCase().includes(inputValue))
        this.setState({
            names: filteredNames
        })
    }
    
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form>
            <input 
                type='text' 
                placeholder='Search a name' 
                onChange={(event) => this.handelChange(event)}
            />
        </form>
        <div style={{margin: 'auto'}}>
            {this.state.names.map((name) => {
                return (
                    <p key={name}>{name}</p>
                )
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar
