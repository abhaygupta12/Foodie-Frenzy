import React, { Component } from 'react'

class MenuDisplay extends Component {

  orderId = [];
      addItem = (id) =>{
        this.orderId.push(id);
        console.log("Added")
        this.props.finalOrder(this.orderId)
      }
      removeItem =(id) =>{
        if(this.orderId.indexOf(id) > -1)
        {
          this.orderId.splice(this.orderId.indexOf(id),1);
          
        }
        console.log("removed")
        this.props.finalOrder(this.order)
      }
      renderCart = (orders)=>{
       console.log(orders)
       return orders.map((item, index)=>{
            return(
              <b>{item},</b>
            )
       })
      }


    renderMenu = ({menudata})=>{
      console.log(menudata)
        if(menudata)
        {
            return menudata.map((item)=>{
                return(
                    <>
                    <div className='col-lg-4'>
                      <img src={item.menu_image} alt="" width="300px" height="200px"/>
                    </div>
                    <div className='col-lg-4'>
                        <p><b>Name :</b>{item.menu_name}</p>
                        <p><b>Desc :</b>{item.description}</p>
                        <p><b>Menu Type :</b>{item.menu_type}</p>
                        <p><b>Price :</b>{item.menu_price}</p>
                    </div>
                    <div className='col-lg-4'>
                         <button onClick={()=>{this.addItem(item.menu_id)}} style={{padding:"7px 10px",backgroundColor:"green",border:"none",marginRight:"30px"}}>Add To Cart</button> 
                         <button onClick={()=>{this.removeItem(item.menu_id)}} style={{padding:"7px 12px",backgroundColor:"red",border:"none"}}>Remove Item</button> 
                    </div> 
                    <br/><hr/>
                  </>
                )   
            })
        }
    }
  render() {
    return (
      <>
  <div className='container'>
    <div className='row'>
      <h3>Item Id {this.renderCart(this.orderId)} Added</h3>
      <hr/>
     {this.renderMenu(this.props)}
    </div> 
  </div> 
      </>
    )
  }
}

export default MenuDisplay




//
// import React, { useState } from 'react';

// const MenuDisplay = (props) => {
//   const [orderId, setOrderId] = useState([]);

//   const addItem = (id) => {
//     setOrderId([...orderId, id]);
//     console.log("Added");
//     props.finalOrder([...orderId, id]);
//   }

//   const removeItem = (id) => {
//     const newOrderId = orderId.filter(orderId => orderId !== id);
//     setOrderId(newOrderId);
//     console.log("removed");
//     props.finalOrder(newOrderId);
//   }

//   const renderCart = (orders) => {
//     console.log(orders);
//     return orders.map((item, index) => {
//       return (
//         <b>{item},</b>
//       )
//     })
//   }

//   const renderMenu = ({ menudata }) => {
//     if (menudata) {
//       return menudata.map((item) => {
//         return (
//           <>
//             <div className='col-lg-8'>
//               <img src={item.menu_image} alt="" width="300px" height="200px" />
//               <div className='col-lg-12'>
//                 <p><b>Name :</b>{item.menu_name}</p>
//                 <p><b>Desc :</b>{item.description}</p>
//                 <p><b>Menu Type :</b>{item.menu_type}</p>
//                 <p><b>Price :</b>{item.menu_price}</p>
//               </div>
//             </div>
//             <div className='col-lg-4'>
//               <button onClick={() => { addItem(item.menu_id) }} style={{ padding: "7px 10px", backgroundColor: "green", border: "none", marginRight: "30px" }}>Add To Cart</button>
//               <button onClick={() => { removeItem(item.menu_id) }} style={{ padding: "7px 12px", backgroundColor: "red", border: "none" }}>Remove Item</button>
//             </div>
//             <hr />
//           </>
//         )
//       })
//     }
//   }

//   return (
//     <>
//       <div className='container'>
//         <div className='row'>
//           <h3>Item Id {renderCart(orderId)} Added</h3>
//           <hr />
//           {renderMenu(props)}
//         </div>
//       </div>
//     </>
//   )
// }

// export default MenuDisplay;
