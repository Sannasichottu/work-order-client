import React from 'react'
import './recivedQuotation.css'
import { Link } from 'react-router-dom'

const RecivedQuotation = () => {
  return (
    <div>
    <h2 className="heading">Recived Quotation</h2>
    <div className="list-tab">
      <table className="table center">
        <thead className="table-head">
        <tr>
            <th className='parts' >Mark X 2019</th>
            <th className='parts'></th>
            <th className='parts'></th>
            <th className='parts'></th>
            <th className='parts'></th>
          </tr>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>unit price</th>
            <th> total price</th>
            <th>Specification</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Product 1</td>
            <td>5 pcs</td>
            <td>₹ 1,250 </td>
            <td>₹ 6,250 </td>
            <td>
            Specification 01
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
    <br />
    <br /> <br /> <br /> <br />
    <h2 className="heading">Edit Quotation</h2>
    <div className="list-tab">
      <table className="table center">
        <thead className="table-head">
        <tr>
            <th className='parts' >Mark X 2019</th>
            <th className='parts'></th>
            <th className='parts'></th>
            <th className='parts'></th>
            <th className='parts'></th>
            <th className='parts'></th>
          </tr>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Edit unit price</th>
            <th>total price</th>
            <th>Specification</th>
            <th>Update Quotation</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Product 1</td>
            <td>5 pcs</td>
            <td>₹ 2,000 </td>
            <td>₹ 10,000 </td>
            <td>
            Specification 01
            </td>
            <td>
            {" "}
                <Link to="/updateQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
   
  </div>
  )
}

export default RecivedQuotation