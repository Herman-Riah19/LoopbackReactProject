import React, { useState, useEffect } from 'react'
import { Box, Container } from '@mui/material'
import { CardProduct, GridContainer, GridItem, Parallax } from '../component';
import styles from '../style/jss/homeStyle';
import { makeStyles } from '@mui/styles';
import { getProducts } from '../service/productService';


const useStyles = makeStyles(styles);

const HomePage = () => {
    const classes = useStyles();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(data => {
                setProducts(data)
            })
    }, []);

    return (
        <Box container>
            <Parallax
                filter
                image={require("../asset/image/banner-style.jpg").default}>
                <GridContainer>
                    <GridItem xs={12} sx={{ marginLeft: "100px" }} sm={12} md={6}>
                        <h1 className={classes.title}>Welcome to my distro app</h1>
                        <h4 className={classes.subtitle}>
                            If you are the new in this site, this is the new web site specialised
                            in the sale and buy on the art of the draw and the design UI/UX for
                            every body, and you can buy your productivity in this platform
                        </h4>
                    </GridItem>
                </GridContainer>
            </Parallax>
            <Container>
                <GridContainer>

                    {products.map(item => (
                        <GridItem xs={12} sm={12} md={3}>
                            <CardProduct product={item}/>
                        </GridItem>
                    ))}
                </GridContainer>
            </Container>
        </Box>
    )
}

export default HomePage
