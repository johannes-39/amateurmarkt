"use client"
import Image from 'next/image'
import TinderCard from 'react-tinder-card'
import PlayerCard from "@/app/components/PlayerCard/PlayerCard";

export default function Home() {
    const onSwipe = (direction: string) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier: string) => {
        console.log(myIdentifier + ' left the screen')
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}><PlayerCard/></TinderCard>
    </main>
  )
}
