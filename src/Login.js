import React, { useState } from 'react'

function Login() {

const [loginData, setLoginData] = useState({
    nome: '',
    senha: '',
    confSenha: '',
    newsletter: true
})

function handleChange(event) {
    
    const updateLoginData = {
        ...loginData, 
        [event.target.name]: event.target.name === 'newsletter' ? event.target.checked : event.target.value
    }
    setLoginData(updateLoginData)
}

console.log(loginData)

function handleSubmit(event){
    event.preventDefault()
    if (loginData.senha !== loginData.confSenha){
        alert('Confirmação de senha não está igual')
    } else {
        alert('Pronto!')
    }
}


    return (
        <div className='login'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Nome'
                        name='nome'
                        value={loginData.nome}
                        onChange={handleChange}

                    />
                    <input
                        type="password"
                        placeholder='Senha'
                        name='senha'
                        value={loginData.senha}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder='Confirmar senha'
                        name='confSenha'
                        value={loginData.confSenha}
                        onChange={handleChange}                        
                    />
                    <label>
                        <input 
                            type="checkbox" 
                            name="newsletter" 
                            checked={loginData.newsletter}
                            onChange={handleChange}   
                        /> 
                    I want to receive the newsletter
                    </label>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login