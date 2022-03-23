import React from 'react'
import { CardIcon, GridContainer, GridItem } from '.'
import { Card, CardHeader, CardActions } from '@mui/material'
import Accessibility from '@mui/icons-material/Accessibility'
import Update from '@mui/icons-material/Update'
import Store from '@mui/icons-material/Store'
import DateRange from '@mui/icons-material/DateRange'
import { makeStyles } from '@mui/styles'
import style from '../style/jss/homeStyle'

const useStyles = makeStyles(style);

function CardContainer() {
    const classes = useStyles()

    return (
        <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
                <Card>
                    <CardHeader color="success" stats icon>
                        <CardIcon color="success">
                            <Store />
                        </CardIcon>
                        <p className={classes.cardCategory}>Revenue</p>
                        <h3 className={classes.cardTitle}>$34,245</h3>
                    </CardHeader>
                    <CardActions stats>
                        <div className={classes.stats}>
                            <DateRange />
                            Last 24 Hours
                        </div>
                    </CardActions>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
                <Card>
                    <CardHeader color="info" stats icon>
                        <CardIcon color="info">
                            <Accessibility />
                        </CardIcon>
                        <p className={classes.cardCategory}>Followers</p>
                        <h3 className={classes.cardTitle}>+245</h3>
                    </CardHeader>
                    <CardActions stats>
                        <div className={classes.stats}>
                            <Update />
                            Just Updated
                        </div>
                    </CardActions>
                </Card>
            </GridItem>
        </GridContainer>
    )
}

export default CardContainer
