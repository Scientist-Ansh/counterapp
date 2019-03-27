import React, {Component} from 'react';

class Counter extends Component{


  countShow = () =>{
    if (this.props.value == 0) return "Zero"

    return this.props.value
  }




  render(){
    const style = {
      margin : '10px'
    }
    return(
      <React.Fragment><center>
      <button
      onClick={()=>this.props.decrement(this.props.id)}
      className="btn btn-secondary btn-warning"
      style={style}>-</button>

      <span >{this.countShow()}</span>
      <button
      style = {style}
      className = "btn btn-primary btn"
      onClick={()=>this.props.increment(this.props.id)}>+</button>

      <button onClick = {this.props.delete}
      className = "btn btn-primary btn-danger">delete</button>
      </center></React.Fragment>
    );
  }
}

export default Counter;
