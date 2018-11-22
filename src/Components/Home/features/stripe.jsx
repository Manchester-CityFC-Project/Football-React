import React, {Component} from 'react'
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate'

class Stripe extends Component {

  ShowStripes = () => <div>
    Hello Stripe
  </div>

   render () {
      return (
         <div className="featured_stripes">
           {this.ShowStripes()}

           </div>
      )
   }

}

export default Stripe