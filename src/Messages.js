import React, { useState } from 'react'

function Messages() {
    const [messages, setMessages] = useState([])

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comment: '',
        isFriendly: true,
        employment: ''
    })

    console.log(formData.employment)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

  return (
    <div>
        {
        messages.length > 0 ? 
        <h1>You have {messages.length} {messages.length > 1 ? 'messages' : 'message'}</h1> :
        <h1>You're all caught up!</h1>
        }

        <h1>Hello, {formData.firstName}</h1>

        <form className='sandboxform' action="">
            <input 
                name='firstName'
                type="text" 
                placeholder='First name'
                onChange={handleChange}
                value={formData.firstName}
            />
            <input 
                name='lastName'
                type="text" 
                placeholder='Last name'
                onChange={handleChange}
                value={formData.lastName}
            />
            <input 
                name='email'
                type="text" 
                placeholder='email'
                onChange={handleChange}
                value={formData.email}
            />
            <textarea 
                name="comment"
                placeholder='Comments'
                cols="30" 
                rows="10" 
                onChange={handleChange}
                value={formData.comment}
            />

            <label htmlFor="isFriendly"><input 
                type="checkbox" 
                name="isFriendly"
                id='isFriendly'
                checked={formData.isFriendly}
                onChange={handleChange}
            />Are you Friendly</label>

            <fieldset>
                <legend>Current employment status</legend>
                <label>
                    <input 
                        type="radio" 
                        name="employment" 
                        id="unemployed" 
                        value='unemployed'
                        onChange={handleChange}
                    /> Unemployed
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="employment" 
                        id="parttime" 
                        value='parttime'
                        onChange={handleChange}
                    /> Part-time
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="employment" 
                        id="fulltime" 
                        value='fulltime'
                        onChange={handleChange}
                    /> Full-time
                </label>
            </fieldset>
        </form>
    </div>
  )
}

export default Messages