import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core'
import { ShoppingCart } from "@material-ui/icons"

import logo from '../../assets/glasses-frame.png'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='Frames' height='25px' className={classes.image}/>
                        Frames
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label='Show Cart items' color="inherit">
                            <Badge badgeContent={2} color='secondary'></Badge>
                            <ShoppingCart />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Navbar