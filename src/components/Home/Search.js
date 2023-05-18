import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

const lurl ="https://resturantapi.onrender.com/location";
const rurl ="https://resturantapi.onrender.com/restro/?state_id=";

class Search extends Component {

  constructor(props)
  {
    super(props)
    console.log("constructor");
    this.state={
      location:"",
      restrodata:""
    }
  }
renderCity =(data)=>{
  if(data)
  {
    return data.map((item)=>{
      return(
        <option value={item.state_id} key={item.state_id}>{item.state}</option>
      )
   })
   }
   }

   handleCity=(event)=>{
     let stateId = event.target.value
     fetch(`${rurl} ${stateId}`,{method:"GET"})
     .then((res) =>res.json())
     .then((data)=>{
            this.setState({
              restrodata:data
            })
     })
   }

   renderRestro =(data)=>{
    if(data)
    {
      return data.map((item)=>{
        return(
          <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name}</option>
        )
     })
     }
     }

     handleRest =(event)=>{     //?
        let restId = event.target.value;
        this.props.history.push(`./details?restId=${restId}`)
     }

  render() {
    return (
     
    <section id="section2">
        <div class="overlaylist">
            <h1><i>Foodie Frenzy</i></h1>
            <p>Foodie Frenzy is a comprehensive food discovery platform that caters to foodies everywhere.</p>
            <form>
                <select id="options" onChange={this.handleCity}>
                  <option>Select City</option>
                  {this.renderCity(this.state.location)} 
                </select>
                {/* <i class="fas fa-search icon"></i>
                <input id="address" type="text" placeholder="Search for restaurant, cuisine or dish"/> */}
                <select id="options" onChange={this.handleRest}>
                  <option>Select Restro</option>
                  {this.renderRestro(this.state.restrodata)} 
                </select>
            </form>
        </div>
    </section> 
     
    )
  }
  componentDidMount()
  {
    fetch(lurl,{method:"GET"})
    .then((res)=>res.json())
    .then((data)=>{
      this.setState(
      {
         location:data
      }
      )
    })
  }
}

export default withRouter(Search);