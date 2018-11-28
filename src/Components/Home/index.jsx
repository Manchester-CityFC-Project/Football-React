import React from 'react'
import Features from '../Home/features/index'
import Matches from '../Home/matches/index'
import MeetPlayer from '../Home/meetPlayer/index'
import Promotion from '../Home/Promotion/index'

export default function index() {
  return (
    <div class="bck_blue">
        <Features/>
        <Matches/>
        <MeetPlayer/>
        <Promotion/>
      
    </div>
  )
}
