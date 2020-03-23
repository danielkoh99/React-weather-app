import React, {useState} from 'react';
import DataCondition from './conditions/DataCondition';
import styled from 'styled-components'


const Button = styled.button`
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

const Select = styled.select`
margin: 1em;
padding: 0.25em 1em;
width: 150px;
color: #282828;
font-size: 1em;
border: 2px solid lightskyblue;
border-radius: 3px;

`
const Forecast = () => {
 // console.log(props)
      let [value, setValue] = useState('')
     // console.log(value)
      
      let[response, setResponse] = useState([])
     var p = document.querySelector('.card-title')
     //console.log(p)
       // const uriEncodedDays = encodeURIComponent(days); 
       function getForecast(e){
        e.preventDefault();
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${p.innerText}&days=${value}&key=be698e9e2aa04f948441aa061b9230bd`,
       {method:"GET"})
       .then(res => res.json())
       .then(res => {
           setResponse(res.data)
           //console.log(res)
           //
       })
       .catch( err => {
         console.log(err)
       })
      }
             
    return(
        <div>
        <form onSubmit={getForecast}>
        <Select onChange={(e) => setValue(e.target.value)}>
            <option defaultValue>Select days</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            
      </Select>    
      <Button type="submit">submit</Button>
      </form>
      <DataCondition response={response}/>
    </div>
    
    
    )
}

export default Forecast