"use client"
import TinderCard from 'react-tinder-card'
import PlayerCard from "@/app/components/PlayerCard/PlayerCard";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Swiper from "@/app/components/Swiper/Swiper";

export default function Home() {
    const onSwipe = (direction: string) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier: string) => {
        console.log(myIdentifier + ' left the screen')
    }
  return (
      <div>
          <main><Header/>
              {/*<div className="flex bg-black min-h-screen flex-col items-center justify-between p-20 overflow-hidden">
                  <Swiper/>
              </div>
          <footer><Footer/></footer>*/}</main>
      </div>


  )
}
