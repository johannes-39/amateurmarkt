import React from 'react';
import './Header.css';
import Image from "next/image";
import image from './profile.jpeg'
import IconTabs from "@/app/components/FooterPanal/FooterPanal";
import SwipeSettings from '../SwipSettings/SwipeSettings';
const Header:React.FC<any> =  () => {
    return (
        <div className={'div'}>
            <div className={"realHeader"}>
                <Image className={"myimg"} src={image} alt={"profile"}/>
                <SwipeSettings/>
            </div>
            <div className={'div2'}>
                <IconTabs/>
            </div>

        </div>
    )
}
export default Header;