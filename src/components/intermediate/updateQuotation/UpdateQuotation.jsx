import React from 'react'
import './updateQuotation.css'
import { Link } from 'react-router-dom'

const UpdateQuotation = () => {
  return (
<div>
<section className="wrapper-invoice">
   
      <div className="invoice">
        <div className="invoice-information">
          <p><b>Order id #</b> : 12345</p>
          <p><b>Created Date </b>: Jan, 07 2024</p>
          
        </div>
       
        <div className="invoice-logo-brand">
        
          <img src="./assets/image/tampsh.png" alt="" />
        </div>
      
        <div className="invoice-head">
          <div className="head client-info">
            <p>San, Inc.</p>
            <p>NPWP: 12.345.678.910.111213.1415</p>
            <p>Pollachi Mainroad</p>
            <p>kinathukadavu, Coimbatore</p>
          </div>
          <div className="head client-data">
            <p>-</p>
            <p>Tamilinfo</p>
            <p>Narayana Kalyana mandabam back side</p>
            <p>kootravu building , dindigul</p>
          </div>
        </div>
        {/* <!-- invoice body--> */}
        <div className="invoice-body">
          <table className="table">
            <thead>
              <tr>
                <th>Mark X 2019</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Template Invoice</td>
                <td>5Pcs</td>
                <td>Rs.10,000</td>
              </tr>
              <tr>
                <td>tax</td>
                <td>Rs.20</td>
                <td>Rs.100</td>
              </tr>
            </tbody>
          </table>
          <div className="flex-table">
            <div className="flex-column"></div>
            <div className="flex-column">
              <table className="table-subtotal">
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>Rs.10,100</td>
                  </tr>
                  <tr>
                    <td>PPN 10%</td>
                    <td>Rs.5.000</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- invoice total  --> */}
          <div className="invoice-total-amount">
            <p>Total : Rs.10,100</p>
          </div>
        </div>
        {/* <!-- invoice footer --> */}
        <div className="invoice-footer">
        <button  >
            <Link className='link' to="/recivedCustomer">Send to Customer</Link>
          </button>
          <p>Thankyou, happy shopping again</p>
         
        </div>
       
      </div>
    </section>
</div>

  )
}

export default UpdateQuotation