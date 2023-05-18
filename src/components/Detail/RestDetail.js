import React, { Component } from 'react';
import axios from "axios";
import "./restdetail.css";
import { Link } from 'react-router-dom';
import MenuDisplay from './menuDisplay';

const url =  "https://resturantapi.onrender.com/detail";
const menuUrl = "https://resturantapi.onrender.com/menu"
// https://resturantapi.onrender.com/detail


class RestDetail extends Component {
    constructor()
    {
        super()
        this.state={
            details :"",
            mealData:"",
            userItem: ""
        }
    }

    addTOCart=(data)=>{
        console.log("data in detail page",data);
      this.setState(
          {
              userItem: data
          }
      )
   }
   proceed =()=>{
    console.log("menu item in session",this.state.userItem) 
       sessionStorage.setItem("menu",this.state.userItem)
    //    console.log("proceed button",this.state.userItem)  //??
       this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`);

   }
    
  render() {
    return (
      <>
       <section id='section1singleProductPage'>
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="image">
                        <img src="img/food5.webp" alt="food5"  width="100%"/>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="productinfo">
                        <div class="content">
                            <h2>{this.state.details.restaurant_name}</h2>
                            <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat totam velit illum, blanditiis fugit aut! Natus maxime minima ut aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima rerum facilis pariatur eos dolores odio aspernatur aut sit quaerat ipsa error eum asperiores amet dolore repudiandae possimus distinctio, ad accusantium.   </p>
                            <h3>&#8377;{this.state.details.cost}</h3>
                            <p class="opentime"><b>Open Now : </b>7am – 4am (Today)
                            </p>
                            <span class="rating">{this.state.details.average_rating}</span>
                            <div class="links">
                                <Link to="#" style={{backgroundColor: "#FF9F00"}}>Add To Cart</Link>
                            <Link to="#" onClick={this.proceed} style={{backgroundColor: "#FB641B"}}>Proceed</Link>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
            
            
        </div>
       </section>

     <MenuDisplay menudata ={this.state.mealData} finalOrder={(data)=>{this.addTOCart(data)}}/>
    
      </>
    )
  }
 async componentDidMount()
 {
     let restId = this.props.location.search.split("=")[1];
     let response = await axios.get(`${url}/${restId}`);
     let menuresponse = await axios.get(`${menuUrl}/${restId}`)
     this.setState(
         {
             details :response.data[0],
             mealData :menuresponse.data
         }
     )
    //  console.log("mealData",this.state.mealData)
 }
}

export default RestDetail