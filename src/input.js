import React from 'react'
import {TextField,Grid, InputAdornment,IconButton} from '@material-ui/core'
import { VisibilityOff ,Visibility} from '@material-ui/icons'

const input = ({half,name,autoFocus,label,type,handleShowpassword,handleChange}) => {
  return (
<Grid item xs={12} sm={half?6:12}>

<TextField
onChange={handleChange}
    name={name}
  label={label}
    required
    autoFocus={autoFocus}
    InputProps={name==='passwod' ? {
endAdornment:(

    <InputAdornment  position='end'>

        <IconButton  onClick={handleShowpassword}>
            {type==='password'?<Visibility/>:<VisibilityOff/>}
        </IconButton>
    </InputAdornment>)
    } :''}
    type={type}
    fullWidth
    variant='outlined'
/>

</Grid>
  )
}

export default input
