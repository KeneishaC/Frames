import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import { Link, useLocation  } from 'react-router-dom'
import useStyles from './styles'

const HomePage = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid  item xs={12} sm={6}>
                <Typography className={classes.media} variant='h1' color='inherit' gutterBottom >Frames Eyeware</Typography>
                <Button className={classes.button} component={Link} to='/shop' size='small' variant='conatined' type='button' color='outlined'>Start Shopping</Button>
            </Grid>
        </div>
    )
}

export default HomePage

