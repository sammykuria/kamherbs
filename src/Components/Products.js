import React from 'react'
import { Link } from 'react-router-dom'
import medicines from './Data'


function Products() {
  return (
    <div>

<div className='botbarcontainer'>
        <div className='botbar'>
        <h3 className='prodheader'>Products</h3>
        <p>Find more about our Products</p>
        </div>
      </div>
     

      <div className='cardcontainer'>
        {medicines.map((medicine) => (
          <div className='card' key={medicine.id}>
            <Link className='imglink' to={`/products/${medicine.title.toLowerCase()}`}>
            <img className='cardimg'
             src={medicine.image} alt='mambo mingi'></img>
            </Link>
            <div className='cardtext'>
              <h3>{medicine.title}</h3>
              <Link className='cardbtn' to={`/products/${medicine.title.toLowerCase()}`}>
              <button className='btnthree'>View More</button>
              </Link>
              
            </div>
          </div>
        ))}
   
      </div>


    </div>
  )
}

export default Products
