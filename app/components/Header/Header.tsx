import React from 'react';
import './Header.css';
import Image from "next/image";
import image from './profile.jpeg'
const Header:React.FC<any> =  () => {
    return (
        <div className={'div'}>
            <div className={'div2'}>
                <nav className='nav'>
                    <div className={"profile"}>
                        <Image className={"myimg"} src={image} alt={"profilepic"}/>
                    </div>

                </nav>
            </div>

        </div>
    )
}
export default Header;