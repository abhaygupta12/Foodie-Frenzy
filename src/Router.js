import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/Home/Home";
import Listing from "./components/Listing/Listing";
import RestDetail from "./components/Detail/RestDetail";
import PlaceOrder from "./components/Bookings/placeOrder";
import ViewOrder from "./components/Bookings/ViewOrder";
import Register from "./components/Login/register";
import Login from "./components/Login/login";

function Routing()
{
    return( 
    <BrowserRouter>
    <div>
       <Header/>
       <Route exact path="/" component={Home} />
       <Route exact path="/listing/:mealId" component={Listing} />
       <Route exact path="/details" component={RestDetail} />
       <Route exact path="/placeOrder/:restName" component={PlaceOrder} />
       <Route exact path="/viewBooking" component={ViewOrder} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/login" component={Login} />
       <Footer/>
    </div>
    </BrowserRouter>
    )
}
export default Routing;