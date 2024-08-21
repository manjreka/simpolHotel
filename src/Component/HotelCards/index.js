import React from 'react'
import './index.css'
const HotelCard = props => {
  const { details } = props
  const { hotelImage, imageType, align } = details
  return (
    <li className='card-list'>
      <img className='cards-img' src={hotelImage} alt="resturant" />
      <div style={{ textAlign: align }}>
        <p>{imageType}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam modi ratione, repudiandae optio culpa ipsum, quo nesciunt esse dolore perferendis qui illum! Voluptatum obcaecati non earum, esse labore laborum.</p>
        <button className='button'>Learn More</button>
      </div>
    </li>
  )
}

export default HotelCard