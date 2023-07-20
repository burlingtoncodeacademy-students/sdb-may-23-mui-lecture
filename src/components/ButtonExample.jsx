import React, { useState } from 'react'
import { Button, ButtonGroup } from "@mui/material"
import { Wifi, WifiOff } from "@mui/icons-material"

function ButtonExample() {

    const [ wifi, setWifi ] = useState(false)

  return (
    <div>
        <h2>Example of a button</h2>
        <ButtonGroup
            size="large"
            variant="contained"
            color={wifi ? "info" : "success"}
        >
            <Button
                startIcon={ <Wifi/> }
                onClick={() => setWifi(true)}
            >On</Button>
            <Button
                startIcon={ <WifiOff/> }
                onClick={() => setWifi(false)}
            >Off</Button>
        </ButtonGroup>
        <h2>The wifi is { wifi ? "On" : "Off" }</h2>

        <h2>Conditional rendering single button</h2>
        <Button
            variant="contained"
            startIcon={ wifi ? <Wifi/> : <WifiOff/> }
            onClick={() => setWifi(!wifi)}
        >
            { wifi ? "On" : "Off"}
        </Button>
    </div>
  )
}

export default ButtonExample