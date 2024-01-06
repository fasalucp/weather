import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { WiWindy } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import './App.css'
const Weather = () => {
  const [data, setData] = useState([]);
  const[search,setSearch] = useState('')
  const url =
    `https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13q=${search}`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a30b0fda0bmsha73f36faf2030b1p165486jsn90eee11b7ea3",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  const forcast = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData([result]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    forcast();
  }, []);
    const change =(e)=>{
        setSearch(e.target.value)


    }
    const find =()=>{
     forcast()
    }
  return (
    <>
      <div className="container">
        <div className="search">
          <input type="text" placeholder="enter your location" onChange={change}/>
          <IoSearch className="text" onClick={find} />
        </div>

        <div>
          {data.map((value) => {
            return (
              <div className="card">
                <div>
                  <img className="img1" src={value.current.condition.icon} alt="" />
                </div>
                <div>
                  <h1 className="font">{value.current.temp_c}°c</h1>
                  <h1 className="locat">{value.location.name}</h1>
                 
                </div>
                
                <div className="main">
                    <div className="main1">
                    <h1 className="hum"><WiWindy />{value.current.humidity}%</h1>
                  <h4 className="hum">humidity</h4>
                  </div>
                  <div>
                  <h1 className="hum"><WiStrongWind />{value.current.wind_kph}km/h</h1>
                    <h4 className="hum">wind speed</h4>
                  </div>
                    
                    </div>
                
                
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Weather;
