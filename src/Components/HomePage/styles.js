import { makeStyles  } from '@material-ui/core/styles'


export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: '0',
        paddingTop: '56.25%', //or 16:9
    },
  content: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
}))