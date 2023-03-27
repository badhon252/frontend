import React from "react";

const WithCounter = (OriginalComponent)=>{
  class NewComponent extends React.Component{
    state ={
      count:0,
    }
const {count} = this.state;
    increament =()=>{
      this.setState(prev=> {prev.count + 1})
    }
    
    render(){
      
      return <OriginalComponent count={count} 
        increament={this.increament} {...this.props}
      />
    }
  }
  return NewComponent;
}

export default WithCounter;