import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import { Link, useLocation  } from 'react-router-dom'
import useStyles from './styles'

const HomePage = () => {
    const classes = useStyles()

    return (
        <div>
            <Grid item xs={12} sm={6}>
                <Typography variant='h1' gutterBottom >Welcome to Frames</Typography>
                <Button component={Link} to='/shop' size='large' variant='conatined' type='button' color='primary'>Start Shopping</Button>
            </Grid>
        </div>
    )
}

export default HomePage

