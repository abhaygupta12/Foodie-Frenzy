import React, { Component } from 'react'
import axios from 'axios'
const url = "https://resturantapi.onrender.com/filter";




export class CuisineFilter extends Component {

    filterCuisine =(event) =>{
        let cuisineId = event.target.value;
        let mealId = this.props.mealId;
        let cuisineUrl = "";
        if(cuisineId === "")
        {
            cuisineUrl = `${url}/${mealId}`
        }
        else
        {
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        // console.log(cuisineUrl)
        axios.get(cuisineUrl)
        .then((res)=> 
        // console.log(res)
        this.props.restPerCuisine(res.data))
    }

  render() {
    return (
      <>
      
        <p className="filter">Sort By</p>
                                       
        {/* <p className="filter">By Location</p>
            <div className="option">
                <label><input type="radio" /> Mumbai</label> <br /><br />
                <label><input type="radio" /> Delhi</label><br /><br />
                <label><input type="radio" /> Bangalore</label><br /><br />
                <label><input type="radio" /> Hyderabad</label><br /><br />
                <label><input type="radio" /> Chennai</label><br /><br />
            </div> */}

        <p className="filter">By Cuisine</p>
            <div className="option" onChange={this.filterCuisine}> 
                <label><input type="radio" value="" name="cuisine" /> All</label> <br />  <br />
                <label><input type="radio" value="1" name="cuisine" /> North India</label> <br />  <br />
                <label><input type="radio" value="2" name="cuisine" /> South India</label> <br />   <br />
                <label><input type="radio" value="3" name="cuisine" /> Dinner</label> <br /> <br />
                <label><input type="radio" value="4" name="cuisine" /> Fast Food</label> <br /> <br />
                <label><input type="radio" value="5" name="cuisine" /> Street Food</label> <br />
            </div>

     
   
                          
      </>
    )
  }
}

export default CuisineFilter