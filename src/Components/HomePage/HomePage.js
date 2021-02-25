import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core'
import { Link, useLocation  } from 'react-router-dom'


const HomePage = () => {
    return (
        <div>
             <Typography variant='h1' gutterBottom>Welcome to Frames</Typography>
             <Button component={Link} to='/shop' size='large' variant='conatined' type='button' color='primary'>Start Shopping</Button>
        </div>
    )
}

export default HomePage

