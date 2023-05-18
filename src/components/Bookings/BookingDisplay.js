import React from 'react';

const BookingDisplay = ({ orderData }) => {
  const renderTable = () => {
    if (orderData) {
      return orderData.map((item, i) => {
        return (
          <tr key={item.id}>
            <th scope='row'>{i + 1}</th>
            <td>{item.id}</td>
            <td>{item.hotel_name}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.cost}</td>
            <td>{item.address.slice(0, 20) + '...'}</td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <div className='container'>
        <center>
          <h3>My Order</h3>
        </center>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>S.No</th>
              <th scope='col'>Order Id</th>
              <th scope='col'>Restro Name</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Cost</th>
              <th scope='col'>Address</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </>
  );
};

export default BookingDisplay;
