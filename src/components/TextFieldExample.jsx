import React, { useState } from 'react'
import { TextField } from '@mui/material'

function TextFieldExample() {
    const [ email, setEmail ] = useState(null)
    console.log(email)

  return (
    <div>
        <h2>Example of a search field</h2>
        <TextField
            variant="standard"
            color="success"
            type="search"
            label="search me"
        />

        <h2>Example of an email field</h2>
        <TextField 
            variant="outlined"
            label="Email"
            placeholder="me@email.com"
            onChange={e => setEmail(e.target.value)}
        />

        <h2>Example of a date filed</h2>
        <TextField 
            type="date"
        />
    </div>
  )
}

export default TextFieldExample