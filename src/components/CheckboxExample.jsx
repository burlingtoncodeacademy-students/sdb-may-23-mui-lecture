import React, { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"

function CheckboxExample() {

    const [ checked, setChecked ] = useState(false)
    console.log(checked)
  return (
    <div>
        <h2>Checkbox Example</h2>
        <FormGroup>
            <FormControlLabel
                control={<Checkbox 
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    color="warning"
                />}
                label="I agree to the terms and conditions"
            >
            </FormControlLabel>
            {/* <FormControlLabel
                control={<Checkbox 
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    color="warning"
                />}
                label="I disagree with the terms and conditions"
            >
            </FormControlLabel> */}
        </FormGroup>
    </div>
  )
}

export default CheckboxExample