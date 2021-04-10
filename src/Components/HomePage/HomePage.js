import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import { Link, useLocation  } from 'react-router-dom'
import useStyles from './styles'

const HomePage = () => {
    const classes = useStyles()
    const location = useLocation()

    return (
        <div className={classes.root}>
            <Grid  item xs={12}>
                <Typography className={classes.media} variant='h1' color='inherit' gutterBottom >Frames Eyeware</Typography>
                <div />
                <Button className={classes.button} component={Link} to='/shop' size='large' color='outlined'>Start Shopping</Button>
            </Grid>
        </div>
    )
}

export default HomePage

