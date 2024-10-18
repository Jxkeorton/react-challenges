import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: ''
      }
    }

    // handleChange = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleCategoryChange = (event) => {
    //     this.setState({
    //         category: event.target.value
    //     })
    // }

    // handleCommentsChange = (event) => {
    //     this.setState({
    //         comments: event.target.value
    //     })
    // }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input 
                    value={this.state.name} 
                    id='"id-name' 
                    name='name' 
                    type='text'
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label htmlFor='id-category'>Query Category:</label>
                <select 
                    id='id-category' 
                    name='category'
                    value={this.state.category} 
                    onChange={this.handleChange}
                >
                    <option value='website'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General enquiry</option>
                </select>
            </div>

            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea 
                    id='id-comments' 
                    name='comments' 
                    value={this.state.comments} 
                    onChange={this.handleChange}
                />
            </div>

            <input type='submit' value="Submit" />
        </form>
      </div>
    )
  }
}

export default ControlledForm
