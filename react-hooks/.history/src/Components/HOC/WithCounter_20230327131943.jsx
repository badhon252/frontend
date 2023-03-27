import React from "react";

const WithCounter = (OriginalComponent)=>{
  class NewComponent extends React.Component{
    state ={
      count:0,
    }

    increament =()=>{
      this.setState(prev=> {count: prev.count + 1})
    }
    
    render(){
      const {count} = this.state;
      return <OriginalComponent />
    }
  }
}