import React, {Component} from 'react'

import {Matches} from '../../firebase'
import {firebaseLooper} from '../ui/convertArray'
import { RevarseArray} from '../ui/revarseArray'

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

    ShowMatches = () => (
         <div>
              Blocks
             </div>
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