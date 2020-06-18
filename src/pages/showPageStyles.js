import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  imageCard: {
    width: '95%',
    margin: '10px',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
  genre: {
    marginTop: '10px',
    display: 'flex',
    '& > *': {
      marginRight: '10px',
    },
  },
  language: {
    marginTop: '10px',
    display: 'flex',
    '& > *': {
      marginRight: '10px',
    },
  },
  officialSite: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      marginRight: '10px',
    },
  },
}));
