import React from "react";
import { Link } from "react-router-dom";
const ListingDisplay = (props)=>{

    const renderData = ({listData}) =>{
        if(listData)
        {
            if(listData.length > 0)
            {
                return listData.map((item)=>{
                    return(
                        <div class="row productbox">
                            <div class="col-lg-5">
                                <a href="singleproduct.html" target="_blank"><img src="/img/food5.webp" alt="" width="100%" /></a>
                            </div>
                            <div class="col-lg-7">
                                <div class="othercontent">
                                    <h2 class="foodname"><Link to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link></h2>
                                    <p class="foodcontent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis ad, cumque illum molestiae corrupti quia accusamus veniam placeat quaerat!</p>
                                    <span class="rating">{item.average_rating} <i class="fas fa-star"></i></span>
                                    <p class="price">&#8377;{item.cost} for one</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        }
    }

    return(
        <>
            {renderData(props)}
        </>
    )

}


export default ListingDisplay;