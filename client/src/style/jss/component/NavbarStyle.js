import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 10,
    width: '300px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#ffffff',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '30ch',
        }
      },
    },
}))

const styles = {
    title: {
        fontFamily: '"Cookie", cursive',
        color: '#ffffff',
        fontSize: '25px',
        cursor: 'off',
        textDecoration: 'none',
        '&:hover':{
          color: '#ffffff',
        },
        '&:focus': {
          color: '#ffffff'
        }
    },
    moreIcon: {
        height: '30px',
        width: '30px',
        backgroundColor: 'transparent',
        '&:hover':{
          color: '#ffffff',
        }
    },
    iconStyle: {
      fontSize: "20px",
      color: "#FFFFFF" && "#000000",
      textDecoration: 'none',
      '&:hover': {
        color: '#000000',
      }
    },
    btnStyle: {
      marginLeft: '20px',
      fontFamily: `Poppins`,
      color: '#ffffff',
      fontSize: '15px',
      textDecoration: 'none',
      '&:hover': {
        color: '#ffffff'
      }
    }
}

export {
    styles,
    Search,
    SearchIconWrapper,
    StyledInputBase
}