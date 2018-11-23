import React, {Component} from 'react'

import {Matches} from '../../firebase'
import {firebaseLooper} from '../ui/convertArray'

class Blocks extends Component {

    state = {
         
    }

    componentDidMount() {
         Matches.limitToLast(6).once('value').then((Snapshot) => {
             const Snap=  firebaseLooper(Snapshot)
             console.log(Snap)
         })
    }

    ShowMatches = () => (
         <div>
              Blocks
             </div>
    )
      

     render () {
          return (
               <div className="home_matches">
            {this.ShowMatches()}
                   </div>
          )
     }

}

export default Blocks