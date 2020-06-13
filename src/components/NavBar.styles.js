import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    marginRight: theme.spacing(3),
  },
  link: {
    color: '#eee',
    textDecoration: 'none',
  },
}));

export default useStyles;
