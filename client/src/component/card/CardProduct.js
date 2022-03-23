import React, { useState, useEffect } from 'react'
import {  Card, CardActions, CardMedia, IconButton } from '@mui/material'
import { GridItem } from '..'
import Download from '@mui/icons-material/Download'

import { makeStyles } from '@mui/styles'
import styles from '../../style/jss/component/cardProductStyle'
import { getCategorieById } from '../../service/categorieService'

const useStyles = makeStyles(styles)

const CardProduct = ({product}) => {
    const classes = useStyles()

    const [categorie, setCategorie] = useState([])

    useEffect(() => {
        getCategorieById(product.categorieId)
            .then(res => {
                setCategorie(res)
            })
    },[product.categorieId])
    return (
        <GridItem style={{marginBottom: '50px'}}>
            <Card className={classes.cardTheme}>
                <CardMedia className={classes.cardBody}>
                    <img src={product.image} className={classes.imageFluid} alt="Wonderfull" />
                </CardMedia>
                <CardActions className={classes.cardFooter}>
                    <GridItem xs={12} sm={12} md={12}>
                        <p className={classes.title}>{product.name}</p>
                        <small className={classes.categories}>{categorie.name}</small>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <small className={classes.price}>Free</small>
                        <IconButton className={classes.downloadBtn}>
                            <Download size='large' color='secondary' />
                        </IconButton>
                    </GridItem>
                </CardActions>
            </Card>
        </GridItem>
    )
}

export default CardProduct
