import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function IconTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
            <Tab icon={<FavoriteIcon />} aria-label="favorite" />
            <Tab icon={<ChatBubbleIcon/>} aria-label="chat" />
            <Tab icon={<SettingsIcon />} aria-label="settings" />
        </Tabs>
    );
}
