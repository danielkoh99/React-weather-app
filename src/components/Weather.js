import React, { useState } from "react";
import styled from "styled-components";
import Conditions from "./conditions/Conditions";

const Button = styled.button`
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

const Div = styled.div`
  text-align: center;
`;
const Input = styled.input.attrs(props => ({
  type: "text"
}))`
  margin: 1em;
  padding: 0.25em 1em;
  color: #282828;
  font-size: 1em;
  border: 2px solid lightskyblue;
  border-radius: 3px;
  width: 150px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  :focus {
    width: 30%;
  }
`;

const Weather = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState("");

  /*  let[responseData, setResponseData] = useState({})
        let[days, setDays] = useState('');*/

  function getForecast(e) {
    e.preventDefault();

    fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=be698e9e2aa04f948441aa061b9230bd`,
      { method: "GET" }
    )
      .then(res => {
        if (res.status === 200) {
          console.log(res.status);
          res.json().then(res => {
            console.log(res.data[0]);
            setResponseObj(res.data[0]);
          });
        } else {
          alert("City not found");
        }
      })
      .catch(err => {
        console.log(err);
      })
      .then(document.getElementById("form").reset());
  }

  return (
    <main>
      <Div>
        <h2> Find current weather conditions</h2>

        <form id="form" onSubmit={getForecast}>
          <Input
            placeholder="Enter your city"
            maxLength="30"
            onChange={e => setCity(e.target.value)}
            type="text"
            required
          />

          <Button type="submit">Get current weather data</Button>
        </form>
        <Conditions responseObj={responseObj} />
      </Div>
    </main>
  );
};
export default Weather;
