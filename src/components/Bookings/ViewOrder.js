import React, { Component } from 'react';
import axios from 'axios';
import BookingDisplay from './BookingDisplay';

// const url = "http://localhost:4321/Order";
const url = "http://localhost:6700/orders";

class ViewOrder extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        orders : ""
         
      }
    }

render()
{
    console.log(this.state.orders)
    return(
        <BookingDisplay orderData ={this.state.orders}/>
         
    )
}
componentDidMount()
 {
    axios.get(`${url}`)
    .then((res)=>{
        this.setState({
            orders : res.data
        })
    })
 }
}
export default ViewOrder

// import React, { Component } from 'react';
// import axios from 'axios';
// import BookingDisplay from './BookingDisplay';

// const url = "http://localhost:6700/orders";

// class ViewOrder extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       orders: []
//     }
//   }

//   componentDidMount() {
//     axios.get(`${url}`)
//       .then((res) => {
//         this.setState({
//           orders: res.data
//         })
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     console.log(this.state.orders)
//     return (
//       <BookingDisplay orderData={this.state.orders} />
//     )
//   }
// }

// export default ViewOrder;
