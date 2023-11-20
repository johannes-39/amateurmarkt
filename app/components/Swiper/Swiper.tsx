import React, {useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import './Swiper.css';
import PlayerCard from "@/app/components/PlayerCard/PlayerCard";

const db = [
    {
        name: 'Johannes Städtler',
        verein: 'POP',
        position: 'ZDM',
        url: 'C:\\Users\\jst\\Uni\\amateurmarkt\\app\\components\\Swiper\\profile.jpeg'
    },
    {
        name: 'Test Nutzer',
        verein: 'POP',
        position: 'IV',
        url: 'C:\\Users\\jst\\Uni\\amateurmarkt\\app\\components\\Swiper\\profile.jpeg'
    },
    {
        name: 'Max Mustermann',
        verein: 'POP',
        position: 'ST',
        url: 'C:\\Users\\jst\\Uni\\amateurmarkt\\app\\components\\Swiper\\profile.jpeg'
    },
    {
        name: 'Hallo Welt',
        verein: 'POP',
        position: 'LM',
        url: 'C:\\Users\\jst\\Uni\\amateurmarkt\\app\\components\\Swiper\\profile.jpeg'
    },

]



function Simple() {
    const characters = db
    const [lastDirection, setLastDirection] = useState();

    const swiped = (direction: any | React.SetStateAction<undefined>, nameToDelete: string) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className={"app"}>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet'/>
            <div className='cardContainer'>
                {characters.map((character) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)}
                                onCardLeftScreen={() => outOfFrame(character.name)}>
                        {/*<div className='card'>
                            <Image className={"image"} src={img} alt={"test"}/>
                            <h3 className={"textbox"}>{character.name}</h3>
                        </div>*/}

                        <PlayerCard name={character.name} verein={character.verein} position={character.position}/>
                    </TinderCard>
                )}
            </div>
            {lastDirection ? <h2 className='text-center infoText bg-white'>You swiped {lastDirection}</h2> :
                <h2 className='infoText'/>}
        </div>
    )
}

export default Simple
