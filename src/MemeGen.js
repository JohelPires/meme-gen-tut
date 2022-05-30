import React, { useState } from 'react'


function MemeGen(props) {

  

  function handleChange(event){
    const {name, value} = event.target
    const updateMeme = {
      ...props.meme,
      [name]: value
    }
    props.setMeme(updateMeme)
  }




    
  return (
      <main>
        <form onSubmit={e => e.preventDefault()} className='form'>
            <input 
            type="text"
            placeholder='Top text'
            name='topText'
            value={props.meme.topText}
            onChange={handleChange}
            />
            <input 
            type="text"
            placeholder='Bottom text'
            name='bottomText'
            onChange={handleChange} 
            />
            <button onClick={props.handleClick}>Get a new meme image</button>

        </form>
        <h2>{props.meme.topText}</h2>
        <img src={props.meme.memeUrl} alt="" srcset="" />
        <h2>{props.meme.bottomText}</h2>
    </main>
  )
}

export default MemeGen