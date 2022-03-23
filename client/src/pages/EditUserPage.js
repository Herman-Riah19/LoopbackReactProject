import React, { useState, useEffect, useContext } from 'react';
import { EditProfile } from '../component';
import {Box} from '@mui/material';
import { getUser, updateUser } from '../service/UserService';
import { AuthContext } from '../security/context';
import { useHistory } from 'react-router-dom';

const EditUserPage = () => {

    const [user, setUser] = useState({})

    const context = useContext(AuthContext)
    const history = useHistory()

    useEffect(() => {
        getUser(localStorage.getItem('id'))
            .then(res => setUser(res))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        updateUser(user.id, user)
        .then(res => {
            context.login(res)
            history.push('/profile')
        })
    }

    return (
        <div>
            <Box sx={{ marginTop: '175px' }}>
                <EditProfile user={user} setUser={setUser} handleChange={handleChange} />
            </Box>
        </div>
    );
};

export default EditUserPage;
