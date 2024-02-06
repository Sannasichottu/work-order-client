import React from "react";
import { Link } from "react-router-dom";
import './recivedList.css'

const RecivedList = () => {
  return (
    <div>
      <h2 className="heading">Recived list From Vendor</h2>
      <div className="list-tab">
        <table className="table center">
          <thead className="table-head">
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>width</th>
              <th>height</th>
              <th>Quotation</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>Product 1</td>
              <td>5 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
              </td>
            </tr>

            <tr>
              <td>Parts 2</td>
              <td>15 pcs</td>
              <td>-</td>
              <td>-</td>

              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
              </td>
            </tr>

            <tr>
              <td>parts 4</td>
              <td>8 pcs</td>
              <td>-</td>
              <td>-</td>

              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
              </td>
            </tr>

            <tr>
              <td>dummy part</td>
              <td>25 pcs</td>
              <td>-</td>
              <td>-</td>

              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
              </td>
            </tr>

            <tr>
              <td>oil</td>
              <td>13 pcs</td>
              <td>-</td>
              <td>-</td>

              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
              </td>
            </tr>

            <tr>
              <td>dummy 4</td>
              <td>5 pcs</td>
              <td>-</td>
              <td>-</td>

              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
              </td>
            </tr>

            <tr>
              <td>parts 9</td>
              <td>15 pcs</td>
              <td>-</td>
              <td>-</td>
              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
              </td>
            </tr>
            <tr>
              <td>dummy-2</td>
              <td>13 pcs</td>
              <td>-</td>
              <td>-</td>

              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
              </td>
            </tr>

            <tr>
              <td>dummy part</td>
              <td>5 pcs</td>
              <td>-</td>
              <td>-</td>

              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
                </Link>{" "}
              </td>
            </tr>

            <tr>
              <td>parts</td>
              <td>15 pcs</td>
              <td>-</td>
              <td>-</td>

              <td>
                {" "}
                <Link to="/uploadQuotation" className="send-link">
                Click-Me 😊
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
  );
};

export default RecivedList;
