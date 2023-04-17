import React, { Component } from 'react';
import QuickDisplay from './QuickDisplay';


const url = "http://localhost:4321/mealType";
export class QuickSearch extends Component {
    //constructor
    constructor() {
      super()
    
      this.state = {
         mealType: ""
      }
    }
  render() {
    return (
      <>
      
      <div id="section3">
            
        <div className="container">
            <h2>Quick Search</h2>
            <p>Discover Restaurant By Meal</p>
            <div className="row">
                {/* <div class="col-lg-3">
                    
                    <div class="box">
                        <a href="link.htm" target="_blank"><img src="img/9..webp" alt=""/></a> 
                        <p>Food Category 8</p> 
                    </div>
                </div> */}
                <QuickDisplay mealData = {this.state.mealType}/>
                
            </div>
        </div>
    </div>
      </>
    )
  }
  componentDidMount(){
      fetch(url, {method : "GET"})
      .then((res)=>res.json())
      .then((data)=>{
          this.setState({
              mealType :data
          })
      })
  }
}

export default QuickSearch