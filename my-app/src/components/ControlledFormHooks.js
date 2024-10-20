import React, { useState } from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [comments, setComments] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, comments, category)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input 
                    value={name} 
                    id='"id-name' 
                    name='name' 
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='id-category'>Query Category:</label>
                <select 
                    id='id-category' 
                    name='category'
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
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
                    value={comments} 
                    onChange={(e) => setComments(e.target.value)}
                />
            </div>

            <input type='submit' value="Submit" />
        </form>
      </div>
  )
}

export default ControlledFormHooks
