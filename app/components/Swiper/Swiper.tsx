import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import img from './profile.jpeg'
import Image from "next/image";
import './Swiper.css';
import PlayerCard from "@/app/components/PlayerCard/PlayerCard";
import ReactFlipCard from "reactjs-flip-card";

const db = [
    {
        name: 'Johannes Städtler',
        url: 'C:\\Users\\jst\\Uni\\amateurmarkt\\app\\components\\Swiper\\profile.jpeg'
    },

]

function Simple () {
    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction: any | React.SetStateAction<undefined>, nameToDelete: string) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className={"app"}>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
            <div className='cardContainer'>
                {characters.map((character) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        {/*<div className='card'>
                            <Image className={"image"} src={img} alt={"test"}/>
                            <h3 className={"textbox"}>{character.name}</h3>
                        </div>*/}

                        <PlayerCard/>
                    </TinderCard>
                )}
            </div>
            {lastDirection ? <h2 className='text-center infoText bg-white'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
           </div>
    )
}

export default Simple
