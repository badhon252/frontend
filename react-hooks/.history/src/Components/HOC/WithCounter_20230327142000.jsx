import React from "react";

const WithCounter = (OriginalComponent)=>{
  class NewComponent extends React.Component{

    //! Because of closure(encapsulation), value of count wouldn't conflict. 
    state ={
      count:0,
    }
    
    increament =()=>{
      this.setState(prev=> ({count: prev.count + 1}))
    }
    
    render(){
      const {count} = this.state;
      console.log(count)
      return <OriginalComponent count={count} 
        increament={this.increament} {...this.props}
      />
    }
  }
  return NewComponent;
}

export default WithCounter;