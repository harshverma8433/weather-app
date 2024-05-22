import React, { useEffect, useState } from 'react'
import Weathercard from './Weathercard';

const Weather = () => {

    const [location , setlocation] = useState("agra");

    const [info ,setinfo] = useState({});

    const getweatherinfo = async () => {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a61c8bf99b9e54c26afa49c01b32bcaa`;

            const res = await fetch(url);
            const data = await res.json();

            console.log(data);

            const {temp,humidity,pressure} = data.main;
            const { main: weatherhood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country , sunset} = data.sys;
            const myweatherinfo = {
                temp,
                humidity,
                pressure,
                weatherhood,
                name,
                speed,
                country,
                sunset
            }

            console.log(myweatherinfo)

            setinfo(myweatherinfo);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getweatherinfo();
    },[])

  return (
    <div className='flex flex-col items-center'>
    <div className='rounded-sm h-8 w-80 flex justify-center overflow-hidden'>
        <input className='w-64 focus:outline-none pl-2' type="text" placeholder='Search...' value={location} onChange={(event) => setlocation(event.target.value)} />
        <button className='bg-blue-200 w-20' onClick={getweatherinfo}>Search</button>
    </div>

    <Weathercard info={info}/>

    

 
</div>
  )
}

export default Weather