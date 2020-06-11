import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px',
  },
  shows: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  center: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
