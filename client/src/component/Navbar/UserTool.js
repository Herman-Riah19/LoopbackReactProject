import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, IconButton, Badge, Button, Menu, MenuItem, Divider } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircle from '@mui/icons-material/AccountCircle'

const UserTool = ({ classes, user, logout }) => {

    const [userMoreAnchor, setUserMoreAnchor] = useState(null)

    const isUserMenuOpen = Boolean(userMoreAnchor)

    const handleUserMenuOpen = (event) => {
        setUserMoreAnchor(event.currentTarget)
    }

    const handleUserMenuClose = () => {
        setUserMoreAnchor(null)
    }

    const userMenuId = 'primary-search-account-menu-mobile'
    const renderUserMenu = (
        <Menu
            anchorE1={userMoreAnchor}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={userMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isUserMenuOpen}
            onClose={handleUserMenuClose}>
            {user && (
                <Box color="inherit">
                    <MenuItem>
                        <Link to="/" className={classes.iconStyle}>
                            <IconButton className={classes.iconStyle} size="large" aria-label="" color="inherit">
                                <HomeIcon />
                            </IconButton>
                            <small style={{ fontFamily: 'Poppins' }}>Home</small>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/profile" className={classes.iconStyle}>
                            <IconButton className={classes.iconStyle} size="large" aria-label="" color="inherit">
                                <AccountCircle />
                            </IconButton>
                            <small style={{ fontFamily: 'Poppins' }}>Account</small>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <IconButton className={classes.iconStyle} size="large" aria-label="" color="inherit">
                            <SettingsIcon />
                        </IconButton>
                        <small style={{ fontSize: "16px", fontFamily: 'Poppins' }}>Settings</small>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Button variant='none' onClick={logout}>
                            <IconButton className={classes.iconStyle} size="large" aria-label="" color="inherit">
                                <LogoutIcon />
                            </IconButton>
                            <small style={{ fontSize: "16px", textTransform: 'Capitalize', fontFamily: 'Poppins' }}>Logout</small>
                        </Button>
                    </MenuItem>
                </Box>
            )}
        </Menu>
    )
    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
            {user ? (
                <Box>
                    <Link to="/" className={classes.iconStyle}>
                        <IconButton className={classes.iconStyle} size="large" aria-label="" color="secondary">
                            <HomeIcon />
                        </IconButton>
                    </Link>
                    <IconButton className={classes.iconStyle} size="large" aria-label="" color="secondary">
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        className={classes.iconStyle}
                        size="large"
                        aria-label="Show more"
                        aria-controls={userMenuId}
                        aria-haspopup="true"
                        onClick={handleUserMenuOpen}
                        color="secondary">
                        <AccountCircle />
                    </IconButton>
                    {renderUserMenu}
                </Box>
            ) : (
                <Box>
                    <Link to="/sign-in" className={classes.btnStyle}>
                        Sing in
                    </Link>
                </Box>
            )}
        </Box>
    )
}

export default UserTool
