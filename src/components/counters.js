import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{



  render(){

    return(
        <div>
            {this.props.count.map(counter => <Counter key = {counter.id}
              value = {counter.value}
              increment = {this.props.onIncrement}
              delete = {this.props.onDelete.bind(this,counter.id)}
              decrement = {this.props.onDecrement}
              id = {counter.id}/>)}
          </div>


    );
  }
}

export default Counters
