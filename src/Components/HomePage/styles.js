import { makeStyles  } from '@material-ui/core/styles'
import Image from '../../assets/landing.jpg'

export default makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        // '@media (min-width:780px)'
        minWidth: '100vw',
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center' , 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('xs')]: {
          marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
          marginRight: '20px',
        },
        // width: 'calc(20vw * 0.54 - 2%)',
        // borderRadius: 8,
        // display: 'flex',
        // marginLeft: '10px',
        // marginTop: '10px'
      },
      button: {
        background: 'linear-gradient(45deg, #78997d 40%, #789901 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        // height: 48,
        // boxShadow: '0 3px 5px 2px #807d7d',
        // paddingLeft: '25%'
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
      },
      media: {
        color: 'white',
        paddingTop: '25%', //or 16:9
        // paddingLeft: '25%'
    },
}))