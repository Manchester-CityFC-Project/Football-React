import React, {Component} from 'react'

import {Matches} from '../../../firebase'
import {firebaseLooper} from '../../ui/convertArray'
import { RevarseArray} from '../../ui/revarseArray'
import MatchesBlocks from '../../ui/matchesBlocks'
import Slide from 'react-reveal/Slide'

class Blocks extends Component {

    state = {
        matches:[]
         
    }

    componentDidMount() {
         Matches.limitToLast(6).once('value').then((Snapshot) => {
             const matches=firebaseLooper(Snapshot)
              this.setState({
                  matches:RevarseArray(matches)
              })
         })
    }

    ShowMatches = (matches) => (
        matches ? matches.map((match) => (
            <Slide bottom key={match.id}>
            <div className="item" >
                <div className="wrapper"> 
                <MatchesBlocks match={match}/>
                </div>
           </div> 
           </Slide>    
        ))

        :null
        
    )
      

     render () {
         console.log(this.state)
          return (
               <div className="home_matches">
            {this.ShowMatches(this.state.matches)}
                   </div>
          )
     }

}

export default Blocks