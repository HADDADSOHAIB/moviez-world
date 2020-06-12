import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    marginRight: theme.spacing(3),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchWrap: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
  link: {
    color: '#eee',
    textDecoration: 'none',
  },
  sechdule: {
    marginLeft: 'auto',
    display: 'flex',
  },
  date: {
    width: '140px',
    ' & .MuiIconButton-label': {
      color: '#eee',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid rgba(255, 255, 255, 1)',
    },
    '& > *': {
      color: '#eee',
    },
  },
  country: {
    marginLeft: '10px',
    marginTop: '7px',
    display: 'flex',
    alignItems: 'center',
    '& .MuiSelect-select.MuiSelect-select': {
      color: '#eee',
    },
    '& .MuiSelect-icon': {
      color: 'rgba(255, 255, 255, 1)',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid rgba(255, 255, 255, 1)',
    },
  },
  airedSearch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5px',
  },
}));

export default useStyles;
