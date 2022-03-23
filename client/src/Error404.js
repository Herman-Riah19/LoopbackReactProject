import React from 'react'
import { Container, Typography } from '@mui/material'

const Error404 = () => {
    return (
        <Container sx={{justifyContent: 'center', textAlign: 'center'}}>
            <Typography variant="h1" xs={4}>
                Error 404
            </Typography>
            <Typography variant="h4" xs={4}>
                Page not Found
            </Typography>
        </Container>
    )
}

export default Error404
