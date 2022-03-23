import { Tab, Tabs, Toolbar } from '@mui/material'
import React, { useState } from 'react'

const SectionBar = ({ sections }) => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        event.preventDefault()
        setValue(newValue);
    };

    return (
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>

            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example">
                <Tab
                    label="All"
                    sx={{
                        color: '#ffffff',
                    }} />
                {sections.map(section => (
                    <Tab
                        label={section.name}
                        sx={{
                            color: '#ffffff',
                        }} />
                ))}
            </Tabs>
        </Toolbar>
    )
}

export default SectionBar
