import React from 'react'
import './recivedCustomer.css'
import { Link } from 'react-router-dom'

const RecivedCustomer = () => {
  return (
    <div>
    <h2 className="heading">Customer Recived List</h2>
    <div className="list-tab">
      <table className="table center">
        <thead className="table-head">
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
           <th>Amount</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Mark X 2019</td>
            <td>5 pcs</td>
            <td>10,100</td>
            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>

          <tr>
            <td>Parts 2</td>
            <td>15 pcs</td>
            <td>5,500</td>

            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>

          <tr>
            <td>parts 4</td>
            <td>8 pcs</td>
            <td>2562</td>

            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>

          <tr>
            <td>dummy part</td>
            <td>25 pcs</td>
            <td>5000</td>

            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>

          <tr>
            <td>oil</td>
            <td>13 pcs</td>
           
            <td>8500</td>
            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>

          <tr>
            <td>dummy 4</td>
            <td>5 pcs</td>
           
            <td>6510</td>
            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>

          <tr>
            <td>parts 9</td>
            <td>15 pcs</td>
            <td>5500</td>
            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>
          <tr>
            <td>dummy-2</td>
            <td>13 pcs</td>
          
            <td>4500</td>
            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>

          <tr>
            <td>dummy part</td>
            <td>5 pcs</td>
            <td>2540</td>

            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>

          <tr>
            <td>parts</td>
            <td>15 pcs</td>
            <td>2560</td>

            <td>
              {" "}
              <Link to="/downloadInvoice" className="send-link">
              Download
              </Link>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <br />
    <br />
    <h4 className="page">
      Showing 0 - 10 of 40 items <span> &lt; </span> <span> 1 </span>{" "}
      <span>2</span> <span className="active"> 3 </span> <span> 4 </span>{" "}
      <span> 5 </span> <span> &gt; </span>{" "}
    </h4>
  </div>
  )
}

export default RecivedCustomer