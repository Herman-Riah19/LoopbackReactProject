import React from 'react'
import { Container, Box } from '@mui/material'

const Cover = () => {
    return (
        <Box> 
            <Container sx={{bgcolor: "linear-gradient(90deg, #00002e, #000057)", m:0}}>
                <img
                    src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=80"
                    alt="Cover"
                    width="100%"
                    height={200}
                />
            </Container>
        </Box>
    )
}

export default Cover
