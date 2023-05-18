import React, { Component } from 'react'
import axios from 'axios'
const url = "https://resturantapi.onrender.com/filter";





export class CostFilter extends Component {

    filterCost =(event) =>{
        let cost = (event.target.value).split("-");
        let lcost = cost[0]
        let hcost = cost[1]
        let mealId = this.props.mealId;
        let costUrl = "";
        if(event.target.value === "")
        {
            costUrl = `${url}/${mealId}`
        }
        else
        {
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`;
        }
        axios.get(costUrl)
        .then((res)=> this.props.restPerCost(res.data))
    }

  render() {
    return (
      <>
       
       <p className="filter">Sort By</p>
        <p className="filter">By Cost</p>
            <div className="option" onChange={this.filterCost}> 
                <label><input type="radio" value="" name="cuisine" /> All</label> <br />  <br />
                <label><input type="radio" value="100-300" name="cuisine" /> 100-300</label> <br />  <br />
                <label><input type="radio" value="301-500" name="cuisine" />301-500</label> <br />   <br />
                <label><input type="radio" value="501-700" name="cuisine" /> 501-700</label> <br /> <br />
                <label><input type="radio" value="701-900" name="cuisine" />701-900</label> <br /> <br />
                <label><input type="radio" value="900-2500" name="cuisine" /> 900-2500</label> <br />
            </div>
    
                          
      </>
    )
  }
}

export default CostFilter