import React, { Component } from "react";
import axios from "axios";
// import "./Listing.css";
import ListingDisplay  from "./ListingDisplay";
import CuisineFilter from "../Filter/cuisineFilter";
import CostFilter from "../Filter/costFilter";

const restrourl = "https://resturantapi.onrender.com/restro?meal_id=";
// https://latx-intern-zomato-api.herokuapp.com/restro?meal_id="
class Listing extends Component{
    constructor(props){
        super()

        this.state={
            restaurantList : ""
        }
    }


    dataPerCuisine =(data) =>{
        this.setState(
            {
                restaurantList : data
            }
        )
    }
    render()
    {
        return(
            <>
                <div id="listing">
                    <div id="sections">
                 <div class="overlay">
                   <h2><i>Listing Page</i></h2>
            <p>Foodie Frenzy is a comprehensive food discovery platform that caters to foodies everywhere. With a vast collection of restaurants, cafes, and bars. From breakfast to dinner and everything in between, Foodie Frenzy has got you covered</p>
             </div>
        
                </div>

                <div id="section1">
                    <div class="container">
                        <div class="row">
                                {/* filters */}
                            <div class="col-lg-3">
                         <div className="sideSection1">      
                            <h2>Filter</h2>
                            
                            <CuisineFilter mealId ={this.props.match.params.mealId} restPerCuisine ={(data)=>{this.dataPerCuisine(data)}}/>
                            <CostFilter mealId ={this.props.match.params.mealId} restPerCost ={(data)=>{this.dataPerCuisine(data)}}/>
                         </div>       
                            </div>
                                {/* restro list */}
                            <div class="col-lg-9">
                                {/* <div class="row productbox">
                                        <div class="col-lg-5">
                                            <a href="singleproduct.html" target="_blank"><img src="/img/foodImages/food5.webp" alt="" width="100%" /></a>
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="othercontent">
                                                <h2 class="foodname">Baskin Robbins</h2>
                                                <p class="foodcontent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis ad, cumque illum molestiae corrupti quia accusamus veniam placeat quaerat!</p>
                                                <span class="rating">4.2 <i class="fas fa-star"></i></span>
                                                <p class="price">&#8377;150 for one</p>
                                            </div>
                                        </div>
                                </div> */}

                                <ListingDisplay listData={this.state.restaurantList} />
                            </div>
                        </div>
                    </div>    
                </div>
                </div>

             </>
        )
    }
    componentDidMount(){
        let mealid = this.props.match.params.mealId;
        console.log(mealid);
        axios.get(`${restrourl}${mealid}`)
        .then((res)=>{this.setState(
            {
                restaurantList : res.data
            }
        )})
    }
}


export default Listing;