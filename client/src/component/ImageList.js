import React from 'react'
import { CardImage, GridContainer, GridItem } from '.'

const ImageList = ({products}) => {
    return (
        <GridContainer >
            {products.map(product => (
                <GridItem xs={12} sm={12} md={3} sx={{marginTop: '10px'}}>
                    <CardImage product={product}  />
                </GridItem>
            ))}
        </GridContainer>
    )
}

export default ImageList
