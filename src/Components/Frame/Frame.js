import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'



const Frame = ( { frame } ) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={frame.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {frame.name}
                    </Typography>
                    <Typography variant='h5'>
                        {frame.price}
                    </Typography>
                    <Typography variant='h2' color='textSecondary'>
                        {frame.description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions doubleSpacing classname={classes.cardActions}>
                    <IconButton aria-label='Add to Cart'>
                        <AddShoppingCart />
                    </IconButton>
            </CardActions>
        </Card>
    )
}

export default Frame