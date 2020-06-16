import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'center',
    justifyContent: 'center',
    margin: '0 20px 20px',
  },
  searchWrap: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
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
      width: '100%',
    },
  },
  sechdule: {
    marginLeft: 'auto',
    display: 'flex',
  },
  date: {
    width: '140px',
    ' & .MuiIconButton-label': {
      color: '#111',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid rgba(0, 0, 0, 1)',
    },
    '& > *': {
      color: '#111',
    },
  },
  country: {
    marginLeft: '10px',
    marginTop: '7px',
    display: 'flex',
    alignItems: 'center',
    '& .MuiSelect-select.MuiSelect-select': {
      color: '#111',
    },
    '& .MuiSelect-icon': {
      color: 'rgba(0, 0, 0, 1)',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid rgba(0, 0, 0, 1)',
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
