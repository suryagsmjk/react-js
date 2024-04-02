import React from 'react'
function Weather() {
  const apiWeather = "14279f60104f4664b08b06f5a7439364"
  const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric"

  const getWeather = async (city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"bangalore"}&appid=${apiWeather}&units=metric`)
      const data = await res.JSON()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  getWeather();

  return (
    <>
      <div className="container">
        <img className="" src="https://tse2.mm.bing.net/th?id=OIP.bFm_HgRBnSZChOdvqnba6QHaHa&pid=Api&P=0&h=180" />
        <img className="" src="" />
        <div id='city'>
          <h2>Bangaluru</h2>
          <h1>30°C</h1>
        </div>

        <div className="otherdetails">
          <div className="humidity">
            <h3 >Humidity:</h3>
            <h1>30%</h1>
          </div>
          <div className="wind">
            <h3 >Wind:</h3>
            <h1>15</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default Weather