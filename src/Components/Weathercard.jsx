import React from 'react';
import logo from "./weather.png"

const Weathercard = ({info}) => {

    const {
                temp,
                humidity,
                pressure,
                weatherhood,
                name,
                speed,
                country,
                sunset
    } = info;
  return (
    <>
            <div style={{width:"500px"}} className=' h-80 bg-white mt-12 w-96 rounded-lg'> 
      <img className='w-32 h-24 mx-auto' src={logo} alt="" />
      <div className='flex pt-8 '>
         <div className='bg-black flex space-x-6 text-white w-80 pr-4 justify-center items-center h-28'>
            <h1 className='text-5xl'>{temp}<sup>o</sup></h1>
            <div>
                <h1 className='text-3xl tracking-wider'>{weatherhood}</h1>
                <p className='text-sm'>{name} {country}</p>
            </div>
         </div>

         <div className='w-48 bg-blue-200 text-3xl flex flex-col h-28 justify-center  text-white'>
            <h1 className='pl-5'>{new Date().toLocaleString()}</h1> 
         </div>
      </div>

        <div className='flex space-x-8 justify-center items-center  h-20'>
            <div className='flex space-x-4 items-center'>
                <i className="fa-regular fa-sun  text-blue-200"></i>
                <div className='flex flex-col'>
                    <h1>{parseInt(sunset/100000)}PM</h1>
                    <h1>SunSet</h1>
                </div>
            </div>
            <div className='flex space-x-4 items-center'>
                <i className="fa-regular fa-sun  text-blue-200"></i>
                <div className='flex flex-col '>
                    <h1>{humidity}</h1>
                    <h1>Humidity</h1>
                </div>
            </div>
            <div className='flex space-x-4 items-center'>
                <i className="fa-regular fa-sun  text-blue-200"></i>   
                <div className='flex flex-col'>
                    <h1>Pressure</h1>
                    <h1>{pressure}MM</h1>
                </div>
            </div>
            <div className='flex space-x-4 items-center '>
                <i className="fa-regular fa-sun  text-blue-200"></i>
                <div className='flex flex-col'>
                    <h1>wind</h1>
                    <h1>{speed}</h1>
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Weathercard