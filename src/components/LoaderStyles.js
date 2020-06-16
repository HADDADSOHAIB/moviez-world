import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default useStyles;
