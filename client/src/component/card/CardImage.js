import { Card, CardMedia } from '@mui/material'
import React from 'react'

const CardImage = ({product}) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt="Paella dish" />
        </Card>
    )
}

export default CardImage
