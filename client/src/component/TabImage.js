import React, { useState } from 'react'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import { Foundation } from '@mui/icons-material'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import DesignServicesIcon from '@mui/icons-material/DesignServices'

import { ImageList } from '.'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const TabImage = ({products}) => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        event.preventDefault()
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider ' }}>
                <Tabs value={value} onChange={handleChange} aria-label='Tabulmation des images'>
                    <Tab
                        icon={<ImageIcon />}
                        iconPosition="start"
                        label='Images' />
                    <Tab
                        icon={<AutoAwesomeMosaicIcon />}
                        iconPosition="start"
                        label='Template' />
                    <Tab
                        icon={<DesignServicesIcon />}
                        iconPosition="start"
                        label='Design UI/UX' />
                    <Tab
                        icon={<Foundation />}
                        iconPosition="start"
                        label='Illustration' />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ImageList products={products} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Tree
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </Box>
    )
}

export default TabImage


//pst hug: 034 15 533 94