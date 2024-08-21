import React from 'react'
import Header from '../Header'

import './index.css'
import HotelCard from '../HotelCards'

const hotelCardData = [
    { id: '1', hotelImage: 'https://res.cloudinary.com/dtzajnril/image/upload/v1724129023/rooms_iwkyvw.jpg', imageType: 'ROOMS', align: 'left' },
    { id: '2', hotelImage: 'https://res.cloudinary.com/dtzajnril/image/upload/v1724129022/dining_soqngk.jpg', imageType: 'DINNING', align: 'center' },
    { id: '3', hotelImage: 'https://res.cloudinary.com/dtzajnril/image/upload/v1724129023/pool_yjmeyr.jpg', imageType: 'POOLS', align: 'right' }
]

const Home = () => {
    return (
        <div style={{ width: '100vw'}}>
            <Header />

            <div className='hotel-img'>
                <h1 className='heading-home'>Lorem Ipsum</h1>
            </div>
            <div className='text-container'>
                <p className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ucillum dolo
                </p>
                <p className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  cillum dolo
                </p>
                <p className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  cillum dolo
                </p>
            </div>

            <h1 className='heading'>Lorem Ipsum</h1>
            <ul className='card-cont'>
                {hotelCardData.map(each => (<HotelCard details={each} key={each.id} />))}
            </ul>


        </div>
    )
}

export default Home