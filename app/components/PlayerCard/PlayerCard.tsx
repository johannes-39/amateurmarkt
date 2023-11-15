import React from 'react';
import './PlayerCard.css'
import Image from 'next/image'
import image from './profile.jpeg'
const PlayerCard:React.FC<any> =  () => {



    return (
        <div className={"divBodyBox"}>
            <div className={'divBody'}>
                <div  className={'divCard'}><Image className={'img'} src={image} alt="blog"/></div>

            </div>

        </div>

    )
}
export default PlayerCard;