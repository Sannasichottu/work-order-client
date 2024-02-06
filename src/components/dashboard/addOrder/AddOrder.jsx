import React from "react";
import "./addOrder.css";
import { Link } from "react-router-dom";

const AddOrder = () => {
   return (
    <div>
      <form>
        <div className="order-head">
          <div className="form-align" >
            <label>Order Number</label>
            <input type="number" placeholder="#000" className="form-input"/>
          </div>
          <div className="form-align" >
            <label>Customer</label>
            <input placeholder="Customer Name / #id" type="text" className="form-input" />
          </div>

          {/* <div className="form-align" >
            <label>Order Status</label>
            <select className="form-input option">
              <option className="form-input-select active"  name="new" id="new"  >
                ------
              </option>
              <option className="form-input-select"  name="new" id="new">
                New
              </option>
              <option className="form-input-select" name="calculation" id="calculation">
                Waiting for Calculation
              </option>
              <option className="form-input-select" name="print" id="print">
                Ready to Print
              </option>
              <option className="form-input-select" name="production" id="production">
                Waiting for Production
              </option>
              <option className="form-input-select" name="Shipped" id="Shipped">
                To be Shipped
              </option>
              <option className="form-input-select" name="done" id="done">
                Done
              </option>
            </select>
          </div> */}
        </div>
      </form>
      <br /> <br /> <br />
      <form>
        <div className="order-head">
          <div className="form-align" >
            <label>Material Name</label>
            <input type="number" placeholder="Name" className="form-input"/>
          </div>
          <div className="form-align" >
            <label>Width</label>
            <input type="number" className="form-input" />
          </div>
          <div className="form-align" >
            <label>Height</label>
            <input type="number" className="form-input" />
          </div>
          <div className="form-align" >
            <label>Pieces</label>
            <input type="number" className="form-input" />
          </div>
          </div>
          <div className="btn">
        <button class="button">Add item</button>
        <button className="button">
          <Link to="/recivedOrder" className='next' >
            Send
           </Link> 
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrder;
