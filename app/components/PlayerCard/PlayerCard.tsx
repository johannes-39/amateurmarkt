import React, {useState} from 'react';
import './PlayerCard.css'
import Image from 'next/image'
import image from './blog-post-3.jpeg'
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