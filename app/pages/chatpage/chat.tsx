import React from 'react';
import Image from 'next/image'
import SettingsList from "@/app/components/SettingsList/SettingsList";
const Chat:React.FC<any> =  () => {

    return (
        <div className={"divBodyBox"}>
            <SettingsList/>

        </div>

    )
}
export default Chat;