import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    color: '#eee',
    '& a': {
      color: '#eee',
      marginLeft: '5px',
    },
  },
  center: {
    textAlign: 'center',
  },
}));

export default useStyles;
