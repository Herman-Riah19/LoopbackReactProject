import { makeStyles } from '@mui/styles'
import React, {useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GridContainer, GridItem } from '..'
import classNames from 'classnames'
import style from '../../style/jss/component/personStyle'
import { IconButton, Typography, Box, Avatar, Menu, MenuItem} from '@mui/material'


const useStyles = makeStyles(style)

const Person = ({ user }) => {

    const history = useHistory()

    const classes = useStyles()

    const [controller, setController] = useState(null)

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    const openController = Boolean(controller)
    const controllerClick = (e) => {
        e.preventDefault()
        setController(e.currentTarget)
    }

    const controllerClose = () => setController(null)
    
    const goTo = () => {
        history.push("/profile/edit")
    }

    return (
        <GridContainer spacing={2}>
            <GridItem sx={{ margin: '-10px' }} xs={6} sm={12} md={4}>
                <div className={classes.spaceImage}>
                    <img className={imageClasses} src={user.profile} alt={user.name} />
                </div>
            </GridItem>
            <GridItem sx={{ marginLeft: '-100px' }} xs={8} sm={12} md={8}>
                <div>
                    <GridContainer spacing={1}>
                        <GridItem xs={6} >
                            <Typography variant='h4' className={classes.title}>
                                {user.name} {user.firstname}
                            </Typography>
                            <IconButton
                                size="large"
                                aria-label="Show more"
                                className={classes.followerBtn}>
                                <img
                                    src={require('../../asset/icon/ri_user-follow-line.svg').default}
                                    alt='Followers...'
                                    className={classes.imgFluid} />
                                <Typography variant='span'>
                                    125 Followers
                                </Typography>
                            </IconButton>
                        </GridItem>
                        <GridItem xs={4}>
                            <IconButton
                                size='medium'
                                aria-label='Following'
                                className={classes.addFollowingBtn}
                                sx={{
                                    backgroundColor: '#ED846D',
                                    color: '#fff',
                                    borderRadius: '15px',
                                    padding: '5px',
                                    '&:hover': {
                                        backgroundColor: '#D12F0A',
                                    }
                                }}>
                                <img
                                    src={require('../../asset/icon/ant-design_user-add-outlined.svg').default}
                                    alt='Add following'
                                    className={classes.imgFluid} />
                                <Typography variant='h2'>
                                    Following
                                </Typography>
                            </IconButton>
                            <br />
                            {Array.from(Array(3)).map((_, index) => (
                                <IconButton
                                    size='large'
                                    aria-label='Stars'
                                    sx={{
                                        marginLeft: '0px',
                                        maxWidth: '50px',
                                        width: '100%',
                                        height: '50px',
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: '#E2BC84'
                                        }
                                    }}>
                                    <img
                                        src={require('../../asset/icon/emojione_star.svg').default}
                                        alt='stars...'
                                        className={classes.imgFluid} />
                                </IconButton>
                            ))}
                        </GridItem>
                        <GridItem xs={2}>
                            <IconButton
                                size='large'
                                aria-label='Following'
                                className={classes.addFollowingBtn}
                                sx={{
                                    backgroundColor: '#ED846D',
                                    color: '#fff',
                                    borderRadius: '15px',
                                    '&:hover': {
                                        backgroundColor: '#D12F0A',
                                    }
                                }}
                                onClick={controllerClick}>
                                <img
                                    src={require('../../asset/icon/carbon_overflow-menu-horizontal.svg').default}
                                    alt='Add following'
                                    className={classes.imgFluid} />
                            </IconButton>
                            <Menu
                            id="basic-menu"
                            anchorEl={controller}
                            open={openController}
                            onClose={controllerClose}
                            MenuListProps={{'aria-labelledby': 'basic-button'}}>
                                <MenuItem onClick={goTo}>Edit profile</MenuItem>
                                <MenuItem onClick={controllerClose}>Setting</MenuItem>
                                <MenuItem onClick={controllerClose}>More</MenuItem>
                            </Menu>
                        </GridItem>
                    </GridContainer>
                    <Box container sx={{ marginTop: '25px' }}>
                        <p>
                            👋 We're a sustainable alternative to plastic water bottles.
                            🚫 Ditch plastic bottles 🌲 Plant trees with us using #BetterPlanet Boxed Water is 100% pure, 92% sustainably packaged & 100%  recyclable. Let’s build a #BetterPlanet together.
                        </p>
                    </Box>
                </div>
            </GridItem>
        </GridContainer>
    )
}

export default Person
