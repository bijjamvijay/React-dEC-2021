import React from "react";
class Number extends React.Component{
    state={
        
            Name:"Muarli Vijay",
            Age:23,
            Gender:"Male",
            image:"data:image/jpeg;base64,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"
            
        
    }
    render(){
        return(
            <React.Fragment>
          <h1>Name={this.state.Name}</h1>
          <h1>Name={this.state.Age}</h1>
          <h1>Name={this.state.Gender}</h1>
          <img src={this.state.image} alt="v"/>


            </React.Fragment>
        )
    }


}
export default Number;