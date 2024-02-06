import React from "react";
import "./listOrder.css";

const ListOrder = () => {
  return (
    <div>

        <div className="order" >
            
            <form>
            <div className="form-align form" >
            <label>Order Status</label>
            <select className="form-input option">
              <option className="form-input-select active"  name="new" id="new"  >
                ------
              </option>
              <option className="form-input-select"  name="new" id="new">
                New
              </option>
              <option className="form-input-select" name="calculation" id="calculation">
                Calculation
              </option>
              <option className="form-input-select" name="print" id="print">
                Print
              </option>
              <option className="form-input-select" name="production" id="production">
                Production
              </option>
              <option className="form-input-select" name="Shipped" id="Shipped">
                Shipped
              </option>
              <option className="form-input-select" name="done" id="done">
                Done
              </option>
            </select>
          </div>
            </form>
        </div> <br /> 

     <div className="list-tab">
     <table className="table center">
        <thead className="table-head">
          <tr>
            <th>Order Num</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Quantity</th>
            <th>CreatedAt</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>031</td>
            <td>New</td>
            <td>custom 1</td>
            <td>5 pcs</td>
            <td>Feb 05 2024</td>
            <td>Edit</td>
          </tr>

          <tr>
            <td>032</td>
            <td>Production</td>
            <td>custom 5</td>
            <td>15 pcs</td>
            <td>Jan 25 2024</td>
            <td>Edit</td>
          </tr>

          <tr>
            <td>033</td>
            <td>Shipped</td>
            <td>custom 9</td>
            <td>8 pcs</td>
            <td>Jan 05 2024</td>
            <td>Edit</td>
          </tr>

          <tr>
            <td>034</td>
            <td>Calculation</td>
            <td>custom 3</td>
            <td>25 pcs</td>
            <td>Jan 25 2024</td>
            <td>Edit</td>
          </tr>

          <tr>
            <td>035</td>
            <td>Print</td>
            <td>custom 7</td>
            <td>13 pcs</td>
            <td>Jan 05 2024</td>
            <td>Edit</td>
          </tr>

          <tr>
            <td>036</td>
            <td>Done</td>
            <td>custom 2</td>
            <td>5 pcs</td>
            <td>Dec 31 2023</td>
            <td>Edit</td>
          </tr>

          <tr>
            <td>037</td>
            <td>Done</td>
            <td>custom 2</td>
            <td>15 pcs</td>
            <td>Dec 28 2023</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>038</td>
            <td>Print</td>
            <td>custom 7</td>
            <td>13 pcs</td>
            <td>Jan 05 2024</td>
            <td>Edit</td>
          </tr>

          <tr>
            <td>039</td>
            <td>Done</td>
            <td>custom 2</td>
            <td>5 pcs</td>
            <td>Dec 31 2023</td>
            <td>Edit</td>
          </tr>

          <tr>
            <td>040</td>
            <td>Done</td>
            <td>custom 2</td>
            <td>15 pcs</td>
            <td>Dec 28 2023</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>
     </div>

      <br /><br /><br />

      <h4 className="page" >Showing 0 - 10 of 40 items  <span> &lt; </span> <span  > 1 </span> <span>2</span> <span className="active"> 3 </span> <span> 4 </span> <span> 5 </span> <span> &gt; </span> </h4> 
    </div>
  );
};

export default ListOrder;
