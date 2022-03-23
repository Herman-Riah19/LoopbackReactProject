import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material'
import React, { useContext } from 'react'
import classNames from 'classnames'
import { makeStyles } from '@mui/styles'
import styles from '../../style/jss/component/CardUserStyle'
import { VisibilityContext } from 'react-horizontal-scrolling-menu'

const useStyles = makeStyles(styles)

const CardUser = ({ onClick, selected, user, image, label }) => {
    const classes = useStyles()
    const visibility = useContext(VisibilityContext)

    const imageClasses = classNames(
        classes.imgCard,
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <CardActionArea
            component='a' 
            onClick={() => onClick(visibility)}
            href='#' sx={{ margin: '5px' }} className={classes.card}>
            <Card sx={{ display: 'flex' }} >
                <CardMedia
                    component="img"
                    sx={{
                        width: 160, display: {
                            xs: 'none', sm: 'block'
                        }
                    }}
                    image={image}
                    alt={label}
                    className={imageClasses} />
                <CardContent sx={{ flex: 1 }}>
                    <Typography variant='h5' className={classes.cardTitle}>
                        {user.name} {user.firstname}
                    </Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default CardUser
