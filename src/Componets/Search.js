import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faArrowDown, faArrowUp, faTemperatureHigh,  faDroplet, faWind, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "./Search.css";

function Search() {
  const [cityName, setCityName] = useState("patna");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    try {
      const apikey = `64a5fddc6898e54406424946414a74fa`;
      const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;
      const response = await axios.get(apiurl);
      
      setData(response?.data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    console.log(cityName);
    if (!cityName) {
      return;
    } else {
      fetchApi();
    }
    
  };
  
  return (
    <div className="main-background">
      <div className="card">
        <h3 style={{ color: "white" }}>Weather App</h3>
       
        <div id="inputSearch">
          <input
            type="text"
            onChange={(e) => {
              setCityName(e.target.value);
            }}
            placeholder="Enter city name"
          />
          <button onClick={handleClick}>search</button>
        </div>
        <div className="tempSection">
          {data.name && data.sys ? (
            <div className="tempIcon">
              <h3>
                {data.name}, {data.sys.country}
              </h3>
              <FontAwesomeIcon icon={faCloudSun} />
              <p>{data.weather ? data.weather[0].main : "Weather"}</p>
            </div>
          ) : null}
          <div id="temp">
            {data.main
              ? data.main.temp
                ? (data.main.temp - 273).toFixed(1)
                : "N/A"
              : "N/A"}
            &deg; C
          </div>
        </div>
        <div className="description">
          {data.main ? (
            <div className="section_desc">
              <div className="cardDesc">
                <div className="descIcon">
                  <FontAwesomeIcon icon={faArrowDown} />
                  <small>Min</small>
                </div>
                <h2>
                  {data.main.temp_min
                    ? (data.main.temp_min - 273).toFixed(1)
                    : "N/A"}
                  &deg; C
                </h2>
              </div>
            </div>
          ) : null}

          {data.main ? (
            <div className="section_desc">
              <div className="cardDesc">
                <div className="descIcon">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <small>Max</small>
                </div>
                <h2>
                  {data.main.temp_min
                    ? (data.main.temp_max - 273).toFixed(1)
                    : "N/A"}
                  &deg; C
                </h2>
              </div>
            </div>
          ) : null}

          {data.main ? (
            <div className="section_desc">
              <div className="cardDesc">
                <div className="descIcon">
                  <FontAwesomeIcon icon={faTemperatureHigh} />
                  <small>Feels Like</small>
                </div>
                <h2>
                  {data.main.temp_min
                    ? (data.main.feels_like - 273).toFixed(1)
                    : "N/A"}
                  &deg; C
                </h2>
              </div>
            </div>
          ) : null}

          {data.main ? (
            <div className="section_desc">
              <div className="cardDesc">
                <div className="descIcon">
                  <FontAwesomeIcon icon={faGaugeHigh} />
                  <small>Pressure</small>
                </div>
                <h2>{data.main.temp_min ? data.main.pressure : "N/A"} hPa</h2>
              </div>
            </div>
          ) : null}
          {data.main ? (
            <div className="section_desc">
              <div className="cardDesc">
                <div className="descIcon">
                  <FontAwesomeIcon icon={faDroplet} />
                  <small>Humidity</small>
                </div>
                <h2>{data.main.temp_min ? data.main.humidity : "N/A"} %</h2>
              </div>
            </div>
          ) : null}

          {data.main ? (
            <div className="section_desc">
              <div className="cardDesc">
                <div className="descIcon">
                  <FontAwesomeIcon icon={faWind} />
                  <small>Wind Speed</small>
                </div>
                <h2>{data.main.temp_min ? data.wind.speed : "N/A"} m/s</h2>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Search;
