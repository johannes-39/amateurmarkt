import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Swiper from "@/app/components/Swiper/Swiper";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Settings from "@/app/pages/settingspage/settings";

export default function IconTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };



    return (
        <Box sx={{position: 'fixed', width: '100%', typography: 'body1' }}>
            <TabContext  value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList sx={{height: '4rem'}} variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
                        <Tab sx={{height: '4rem'}} icon={<FavoriteIcon />} aria-label="favorite" value={"1"}/>
                        <Tab sx={{height: '4rem'}} icon={<ChatBubbleIcon/>} aria-label="chat" value={"2"}/>
                        <Tab sx={{height: '4rem'}} icon={<SettingsIcon />} aria-label="settings" value={"3"}/>
                    </TabList>
                </Box>
                <TabPanel sx={{display: 'flex', justifyContent: 'center'}} value="1"><Swiper/></TabPanel>
                <TabPanel value="2">Item Three</TabPanel>
                <TabPanel sx={{display: 'flex', justifyContent: 'center'}} value="3"><Settings/></TabPanel>

            </TabContext>
        </Box>
    );
}
