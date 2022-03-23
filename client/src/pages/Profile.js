import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import classNames from 'classnames'
import { makeStyles } from '@mui/styles'
import styles from "../style/jss/profilePage"
import { Person, TabImage } from '../component'
import { getUser, getUserProducts } from '../service/UserService'

const useStyles = makeStyles(styles)

const Profile = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState({})
    const [products, setProducts] = useState([])

    useEffect(() => {
        const id = localStorage.getItem("id")
        getUser(id)
            .then(data => {
                setUser(data)
            })
    }, [])

    useEffect(() => {
        const id = localStorage.getItem("id")
        getUserProducts(id)
            .then(res => setProducts(res))
    },[])

    return (
        <Box sx={{marginTop: '175px'}}>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <Person user={user} userProfile={user.profile} />
                        <TabImage products={products} />
                    </div>
                </div>
            </div>
        </Box>
    );
}
export default Profile
