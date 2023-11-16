import React from 'react';
import Image from 'next/image'
import SettingsList from "@/app/components/SettingsList/SettingsList";
import ChatList from "@/app/components/ChatList/ChatList";
const Chat:React.FC<any> =  () => {

    return (
        <div className={"divBodyBox"}>
            <ChatList/>

        </div>

    )
}
export default Chat;