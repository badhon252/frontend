import React from "react";

const WithCounter = ()=>{
  class NewComponent extends React.Component{
    state ={
      count:0,
    }

    increament =()=>{
      this.setState(prev=> {count: prev.count + 1})
    }
    
    render(){

    }
  }
}