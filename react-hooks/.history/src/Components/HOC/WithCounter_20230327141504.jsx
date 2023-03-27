import React from "react";

const WithCounter = (OriginalComponent)=>{
  class NewComponent extends React.Component{
    state ={
      count:0,
    }

    console.log(this.state.count)

    increament =()=>{
      this.setState(prev=> ({count: prev.count + 1}))
    }
    
    render(){
      const {count} = this.state;
      debugger
      return <OriginalComponent count={count} 
        increament={this.increament} {...this.props}
      />
    }
  }
  return NewComponent;
}

export default WithCounter;