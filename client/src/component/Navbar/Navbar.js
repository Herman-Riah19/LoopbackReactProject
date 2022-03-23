import React, { useContext, useState, useEffect } from 'react'
import { Box, AppBar, Typography, Toolbar, IconButton, Badge, Menu, MenuItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { makeStyles } from '@mui/styles'
import { styles, Search, SearchIconWrapper, StyledInputBase } from '../../style/jss/component/NavbarStyle'
import { Link } from 'react-router-dom';
import UserTool from './UserTool'
import { getCategories } from '../../service/categorieService'

import { AuthContext } from '../../security/context'
import SectionBar from './SectionBar'

const useStyles = makeStyles(styles);

const Navbar = () => {
  const classes = useStyles();

  const { user, logout } = useContext(AuthContext)

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(res => {
        setCategories(res)
      })
  },[])

  const [mobileMoreAnchor, setMobileMoreAnchor] = useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchor)

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchor(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchor(null)
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorE1={mobileMoreAnchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      {user ? (
        <Box color="inherit">
          <MenuItem>
            <IconButton className={classes.iconStyle} size="large" aria-label="" color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <small style={{ fontFamily: 'Poppins' }}>Notifications</small>
          </MenuItem>
          <MenuItem>
            <Link to="/profile" className={classes.iconStyle}>
              <IconButton className={classes.iconStyle} size="large" aria-label="" color="inherit">
                <AccountCircle />
              </IconButton>
              <small style={{ fontFamily: 'Poppins' }}>Account</small>
            </Link>
          </MenuItem>
        </Box>
      ) : (
        <Box color="inherit">
          <Link to="/sign-in" className={classes.btnStyle}>
            Sing in
          </Link>
        </Box>
      )}
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar position="fixed">
          <Typography variant="h6" noWrap component="div">
            <Link to="/" className={classes.title}>
              Try-inc
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              unputProps={{ 'arial-label': 'search' }} />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          <UserTool classes={classes} user={user} logout={logout} />

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              className={classes.iconStyle}
              size="large"
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="secondary">
              <img
                src={require('../../asset/icon/menu-alt-left.svg').default}
                alt="Menu"
                className={classes.moreIcon} />
            </IconButton>
          </Box>
        </Toolbar>
        <SectionBar sections={categories} />
      </AppBar>
      {renderMobileMenu}
    </Box>
  )
}

export default Navbar
