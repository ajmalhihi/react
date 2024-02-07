import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Appbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>vellya chomala such</Typography>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'><link to={'/'} style={{textDecoration:'none'}}>view</link></Button>
                <Button variant='contained' color='error'>Add Data</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Appbar