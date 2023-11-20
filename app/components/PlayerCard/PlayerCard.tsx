import React from 'react';
import './PlayerCard.css'
import Image from 'next/image'
import image from './profile.jpeg'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
const PlayerCard:React.FC<any> =  ({name, verein, position}) => {



    return (
        <div className={"divBodyBox"}>
            <div className={'divBody'}>
                <div className={'divCard'}><Image className={'img'} src={image} alt="blog"/></div>
                <div className={"profilInfos"}>
                    <h2 className={"name"}>{name}</h2>
                    <div className={"vereinposi"}>
                        <div className={"verein"}>{verein}</div>
                        <div className={"position"}>
                            <h2 className={"posi"}>{position}</h2>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
export default PlayerCard;