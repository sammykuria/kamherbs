import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      
      <div>
        <div className='imageone'>
            <img src='../kamzolesticker.png' alt='tribunal'></img>
        </div>

        <div>
            <div className='benefits'>
                <h2>Benefits Of Herbal Drugs</h2>
            </div>

            <div className='homeabout'>
                <div className='lookponme'>
                    <h3>We have been major herbal Distrubutors since 1990</h3>
                    <p> they contain natural compounds that work in synergy, reducing the risk of harsh side effects seen in synthetic drugs. Many herbs also provide additional health benefits, such as antioxidants and anti-inflammatory properties, supporting overall well-being beyond just treating specific conditions.</p>
                <Link to='/blog'>
                <button className='medication'>Read More</button>
                </Link>
                </div>
                <div className='babylonimg'>
                    <img src='https://iimtu.edu.in/blog/wp-content/uploads/2023/08/Herbal-2.jpg' alt='babylon'></img>
                </div>
            </div>


            <div className='strikeshit'>
                <h2 className='beeboop'>Healthcare Services</h2>
                
                
                <div className='msupamlafi'>
                <div className='mbio'>
                    <div className='elevation'>
                        <h4>General Consultaion</h4>
                        <p>Diagnosis and treatment of common illnesses</p>
                    </div>
                </div>


                <div className='mbio'>
                    <div className='elevation'>
                        <h4>Preventive Care</h4>
                        <p>Diagnosis and treatment of common illnesses</p>
                    </div>
                </div>
                </div>
               

                <div className='msupamlafi'>
                <div className='mbio'>
                    <div className='elevation'>
                        <h4>Diagnostic Services</h4>
                        <p>Diagnosis and treatment of common illnesses</p>
                    </div>
                </div>

                <div className='mbio'>
                    <div className='elevation'>
                        <h4>Pharmacy services</h4>
                        <p>Diagnosis and treatment of common illnesses</p>
                    </div>
                </div>

                </div>

                <div className='msupamlafi'>
                <div className='mbio'>
                    <div className='elevation'>
                        <h4>Minor Procedure</h4>
                        <p>Diagnosis and treatment of common illnesses</p>
                    </div>
                </div>

                <div className='mbio'>
                    <div className='elevation'>
                        <h4>Preventive care</h4>
                        <p>Diagnosis and treatment of common illnesses</p>
                    </div>
                </div>

                </div>
            </div>

            <div className='homeproducts'>
                <div className='homeproductscont'>

                    <div className='subsurf'>
                        <h2>View our Latest Product</h2>
                        <div  className='shalipoppi'>
                       
                        <div className='prodimg'>
                        <h4>Kamzole</h4>
                        <p>Treats stomach Ulcers</p>
                        </div>
                        <img className='primg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJLe7tFUtpnJU3CwyWswWNqMPZmUVNuSQEgzBVDj2XZ691AWON8EIOywkYCI9YYPA0jc&usqp=CAU' alt='rasta'></img>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
