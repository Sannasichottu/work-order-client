import React from 'react'
import { Link } from 'react-router-dom'
import './uploadQuotation.css'

const UploadQuotation = () => {
  return (
    <div>
    <h2 className="heading">prepare the quotation</h2>
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
            <th>total price</th>
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
      <button className="button1">
          <Link to="/recivedQuotation" className='next' >
            Send to Admin
           </Link> 
        </button>
    </div>
    <br />
    
  </div>
  )
}

export default UploadQuotation