import React from 'react'
import './form.css'

function Form() {
  return (
    <div>


<section class="container">
      <header id='bold1' >Details Form</header>
      <form action="#" class="form">
      <div className="input-box address">
          <label>Contact Details</label>
          <input type="text" placeholder="Name"  />
          <input type="text" placeholder="Company Name" required />
          <input type="phone" placeholder="Phone" required />
          <input type="Email" placeholder="Email" required />
                  </div>
        {/* <div class="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div class="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>
        <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div class="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div> */}
        <div class="gender-box">
          <h3> Radio Button</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">option 1</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">option 2</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">option 3</label>
            </div>
          </div>
        </div>
        <div class="input-box address">
          <label id='bold' >Address</label> <br /><br />
          <label>Service Address</label>
          <input type="text" placeholder="Enter street address" required />
          <input type="text" placeholder="Enter street address line 2" required />
          {/* <div class="column">
            <div class="select-box">
              <select>
                <option hidden>Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
            <input type="text" placeholder="Enter your region" required />
          </div> */}
          <div class="column">
            <input type="text" placeholder="Enter your city" required />
            <input type="number" placeholder="Enter postal code" required />
          </div><br />
          <label>Billing Address</label>
          <input type="text" placeholder="Enter street address" required />
          <input type="text" placeholder="Enter street address line 2" required />
          <div class="column">
            {/* <div class="select-box">
              <select>
                <option hidden>Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            <input type="text" placeholder="Enter your region" required />
            </div> */}
          </div>
          <div class="column">
            <input type="text" placeholder="Enter your city" required />
            <input type="number" placeholder="Enter postal code" required />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </section>
    </div>
  )
}

export default Form