import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  imageCard: {
    width: '50%',
    margin: '10px',
  },
  detailsCard: {
    width: '50%',
    margin: '10px',
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
});
