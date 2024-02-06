import React from 'react'
import './updateQuotation.css'
import { Link } from 'react-router-dom'

const UpdateQuotation = () => {
  return (
    <div className='detail' >
    <div className='detail-box'>
        <h1>Company Details</h1>
        <div className="cmpny-detail" >
            <diV >
                <h3 className='head'>Company Name</h3>
                <h3 className='head'>Contact Number</h3>
                <h3 className='head'>Fax Number</h3>
                <h3 className='head'>Website Link</h3>
            </diV>
            
            <div  >
              <h4 className='para'>TamilInfo</h4>
                <h4 className='para'> 080567 80587</h4>
                <h4 className='para'>(Number)</h4>
                <h4 className='para'>
                    <Link className='next-1' to="https://www.tamilinfotechnology.com/agency/index.html" >Tamilinfo</Link>
                </h4>
            </div>
            
        </div>
    </div>
    <div className='detail-box'>
        <h1>Customer Details</h1>
        <div className="cmpny-detail" >
            <diV >
                <h3 className='head'>Company Name</h3>
                <h3 className='head'>Contact Number</h3>
                <h3 className='head'>Address</h3>
            </diV>
            
            <div  >
              <h4 className='para'>San</h4>
                <h4 className='para'> 9876543210</h4>
                <h4 className='para'>Valluvar nagar, 1st street, <br /> Dindigul</h4>
                
            </div>
            
        </div>
    </div>
</div>
  )
}

export default UpdateQuotation