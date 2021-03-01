import { makeStyles  } from '@material-ui/core/styles'


export default makeStyles(() => ({
    root: {
        minheight: '100vh',
        backgroundImage: `url(${'../../assest/landing.png'})`
    },
    media: {
        paddingTop: '56.25%', //or 16:9
    },
}))