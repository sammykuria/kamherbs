import React from 'react'
import { useParams } from 'react-router-dom'
import medicines from './Data'


function ProductsDetailed() {
    const { title } =useParams()
    const medicine = medicines.find((med) => med.title.toLowerCase() === title)


  return (
    <div>
<div className='container'>
<div className='botbarcontainer'>
          <div className='botbar'>
          <h3 className='prodheader'>Products</h3>
          <p>View our Products</p>
          </div>
        </div>
</div>
     


       <div className='cardycontainer'>
        <div className='cardy'>
            <img className='cardyimg' src={medicine.image} alt='mambo mingi'></img>
        <div className='cardtext'>
        <h1>{medicine.title}</h1>
        <div className='discount'>
        <p className='sautisol'>Ksh. {medicine.price}</p>
        <p className='burnaboy'>Ksh. {medicine.discount}</p>

        </div>
        <h4>Cures:</h4>
        <ul>
            {medicine.Cures.map((cure, index) =>(
                <li key={index}>{cure}</li>
            ))}
        </ul>
        <h4>symptoms:</h4>
        <ul className='symptoms'>
            {medicine.symptoms.map((symptom, index) =>(
                <li key={index}>{symptom}</li>
            ))}
        </ul>
        </div>
        </div>
      

       </div>
    </div>
  )
}

export default ProductsDetailed
