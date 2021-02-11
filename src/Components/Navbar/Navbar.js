import React from 'react'
import { Link, useLocation  } from 'react-router-dom'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core'
import { ShoppingCart } from "@material-ui/icons"

import logo from '../../assets/glasses-frame.png'
import useStyles from './styles'

const Navbar = ( {totalItems} ) => {
    const classes = useStyles()

    const location = useLocation()

    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={ Link } to='/ 'variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='Frames' height='25px' className={classes.image}/>
                        Frames
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={ Link } to='/cart' aria-label='Show Cart items' color="inherit">
                            <Badge badgeContent={totalItems} color='secondary'></Badge>
                            <ShoppingCart />
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Navbar