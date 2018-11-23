import React, {Component} from 'react'

import {Matches} from '../../firebase'
import {firebaseLooper} from '../ui/convertArray'
import { RevarseArray} from '../ui/revarseArray'
import MatchesBlocks from '../ui/matchesBlocks'

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
            <div className="item" key={match.id}>
                <div className="wrapper"> 
                <MatchesBlocks match={match}/>
                </div>
           </div>     
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