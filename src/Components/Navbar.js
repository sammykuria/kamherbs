import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div >

      <div className='reality'>

        <div className='realitycont'>
            <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            
                <ul>
                    <li>
                        <Link to='blog'>Blog</Link>
                    </li>  
                </ul>
        </div>
       
      <div className='realitylogo'>
        <h2>Kamherbs</h2>
        <h3>Clinic</h3>
            {/* <img src='../kamherbslogo.png' alt='fools die'></img> */}
        </div>

        <div className='realitycont'>
            {/* <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
        
            <ul>
                <li>
                    <Link to='blog'>Blog</Link>
                </li>  
            </ul> */}
            <ul>
                <li>
                    <Link to='contact'>Contact Us</Link>
                </li>  
            </ul>
            <ul>
                <li>
                 <Link className='jahtings' to='book'>
                <button >Book Appointment</button> 
                 </Link> 
                </li>  
            </ul>
            
        </div>

       
      </div>


    </div>
  )
}

export default Navbar
