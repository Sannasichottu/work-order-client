import React from "react";
import './recivedOrder.css'
import { Link } from "react-router-dom";

const RecivedOrder = () => {
  
   
  return (
    <div>
        <h2 className="heading">Recived Order From Customer & Send to Vendor</h2>
      <div className="list-tab">
        <table className="table center">
          <thead className="table-head">
            <tr>
              <th>Order Num</th>
              <th>Product Name</th>
              <th>Customer/id</th>
              <th>Quantity</th>
              <th>width</th>
              <th>height</th>
              <th>CreatedAt</th>
              <th>Vendor</th>
              <th>Send</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>031</td>
              <td>Product 1</td>
              <td>custom 1</td>
              <td>5 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Feb 05 2024</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
            </tr>

            <tr>
              <td>032</td>
              <td>Parts 2</td>
              <td>custom 5</td>
              <td>15 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Jan 25 2024</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
            </tr>

            <tr>
              <td>033</td>
              <td>parts 4</td>
              <td>custom 9</td>
              <td>8 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Jan 05 2024</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
            </tr>

            <tr>
              <td>034</td>
              <td>dummy part</td>
              <td>custom 3</td>
              <td>25 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Jan 25 2024</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
            </tr>

            <tr>
              <td>035</td>
              <td>oil</td>
              <td>custom 7</td>
              <td>13 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Jan 05 2024</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
            </tr>

            <tr>
              <td>036</td>
              <td>dummy 4</td>
              <td>custom 2</td>
              <td>5 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Dec 31 2023</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
            </tr>

            <tr>
              <td>037</td>
              <td>parts 9</td>
              <td>custom 2</td>
              <td>15 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Dec 28 2023</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
            </tr>
            <tr>
              <td>038</td>
              <td>dummy-2</td>
              <td>custom 7</td>
              <td>13 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Jan 05 2024</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
            </tr>

            <tr>
              <td>039</td>
              <td>dummy part</td>
              <td>custom 2</td>
              <td>5 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Dec 31 2023</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
            </tr>

            <tr>
              <td>040</td>
              <td>parts</td>
              <td>custom 2</td>
              <td>15 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>Dec 28 2023</td>
              <td>
              <select>        
                <option value="vendor1">vendor1</option>
                <option value="vendor2">vendor2</option>
                <option value="vendor3">vendor3</option>
                <option value="vendor4">vendor4</option>
        </select>
              </td>
              <td> <Link to="/recivedList" className="send-link">send &gt;</Link> </td>
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
  );
};

export default RecivedOrder;
