import React from 'react'

function Appointment() {
  return (
    <div >

<div className='botbarcontainer'>
        <div className='botbar'>
        <h3 className='prodheader'>Book Appointment</h3>
        <p>Prioritize your Health</p>
        </div>
      </div>
     


    <div className='bookcontainer'>
      <div className='babylon'>
            

              <div className='babylon'>
              <form className='form'>
                <p className='form-title'>Book Appointment</p>
                
              
                <div class="input-container">
                <input type='email' placeholder='Enter Full name' />
                <input type="number" placeholder="Enter number" />
                <input type='email' placeholder='Enter Email' />

              </div>
              <div className='inputcontainer'>
                  <input type='email' placeholder='Enter Message' />
                </div>
              <button type="submit" class="submit">
              Submit
            </button>
              </form>
              </div>
            
            </div>


      <div className='babylonimg'>
        <img src='https://www.motherhoodindia.com/wp-content/uploads/2021/09/Contact-page-Book-an-Appointment_Mobile-banner_578X364-px-02.jpg' alt='thieves & murderers'></img>
      </div>
     
  </div>
      
    </div>
  )
}

export default Appointment
