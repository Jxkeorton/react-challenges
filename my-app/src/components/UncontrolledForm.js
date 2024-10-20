import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef()
      this.inputCategory = React.createRef()
      this.inputComments = React.createRef()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.inputName.current.value)
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input 
                    id='"id-name' 
                    name='name' 
                    type='text'
                    ref={this.inputName}
                />
            </div>
            <div>
                <label htmlFor='id-category'>Query Category:</label>
                <select 
                    id='id-category' 
                    name='category'
                    ref={this.inputCategory}

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
                    ref={this.inputComments}
                />
            </div>

            <input type='submit' value="Submit" />
        </form>
      </div>
    )
  }
}

export default ControlledForm
