
import React from 'react'
import { AppBar,Box,Toolbar,Typography,Button,IconButton} from '@material-ui/core';
import {Menu} from '@material-ui/icons'

const MainHead = () => {
  return (

 <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Menu/>
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
JNTUHCEJ
      </Typography>
      <Button color="inherit"> Jawaharlal Nehru Technological University</Button>
    </Toolbar>
  </AppBar>
</Box>

  )
}

export default MainHead


