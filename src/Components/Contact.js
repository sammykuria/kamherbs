import React from 'react'

function Contact() {
  return (
    <div>

        <div className='botbarcontainer'>
        <div className='botbar'>
            <h3 className='prodheader'>Contact Us</h3>
            <p>Reach us at various platforms</p>
            </div>
        </div>
      
      <div className='callmecontainer'>
        <div className='callme'>
            <img className='callimg' src='https://as2.ftcdn.net/v2/jpg/01/24/27/05/1000_F_124270591_CtuUNrS8u5uvyH9BFCLgSi4ayLeIzZj2.jpg' alt='alldissalldat'></img>


        <div className='contactbox'>
            <div className='contact'>
            <i class="fa-solid fa-phone-volume"></i>
            <div className='contactinfo'>
                <h3>Call Us at</h3>
                <p>0722848380</p>
                <p>0725416777</p>
            </div>
            </div>

            <div className='contact'>
            <i class="fa-solid fa-envelope"></i>
            <div className='contactinfo'>
                <h3>Email</h3>
                <p>andrewkuria@gmail.com</p>
                <p>kamherbsclinic@gmail.com</p>
            </div>
            </div>

            <div className='contact'>
            <i class="fa-solid fa-map-location-dot"></i>
            <div className='contactinfo'>
                <h3>Find Us</h3>
                <p>Ngara, Blessed House</p>
                <p>Githurai, Roundabout</p>
                <p>Thika, Njahi house</p>
                <p>0725416777</p>
            </div>
            </div>

        </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
