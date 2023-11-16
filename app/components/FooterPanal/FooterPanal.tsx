import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Swiper from "@/app/components/Swiper/Swiper";
import Settings from "@/app/pages/settingspage/settings";
import './FooterPanal.css'

const IconTabs:React.FC<any> =  () => {
    const data = [
        {
            label: "",
            value: "swiper",
            icon: FavoriteIcon,
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: "",
            value: "profile",
            icon: ChatBubbleIcon,
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "",
            value: "settings",
            icon: SettingsIcon,
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    return (
        <Tabs value="swiper">
            <TabsBody
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}>
                <TabPanel key={"swiper"} value={"swiper"}>
                    <Swiper/>
                </TabPanel>
                <TabPanel key={"chat"} value={"chat"}>
                    <h2>test</h2>
                </TabPanel>
                <TabPanel key={"settings"} value={"settings"}>
                    <Settings/>
                </TabPanel>
            </TabsBody>
            <TabsHeader className={"tabheader"}>
                {data.map(({ label, value, icon }) => (
                    <Tab key={value} value={value}>
                        <div className="flex items-center gap-2">
                            {React.createElement(icon, { className: "w-5 h-5" })}
                            {label}
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
        </Tabs>
    );
}
export default IconTabs;