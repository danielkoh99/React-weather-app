import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
 display:grid;
 grid-template-columns:20% 20% 20% 20% 20%;

@media (max-width:768px){
    display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
}
`
const Img =styled.div`
text-align:center;
vertical-align:middle;
`

const Weather = styled.div`
background-color:#ffddcc;
`
const DataCondition = (props) => {
  // console.log(props.response)
    return (
        <Card>
        {props.response.map((data) => 
            <Weather className="card" style={{width:200+ 'px'}}>
        <p className="card-title">{data.valid_date}</p>
       <Img><img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} width ="100px" height="100px" alt=""/></Img> 
        <p className="card-text">Min temp <strong>{data.min_temp}</strong> / max temp <strong>{data.max_temp}</strong></p>
        <p className="card-text">
            It will be {""}{data.temp} degrees
            with{""} {data.weather.description}
              </p>
              </Weather>
              )} 
        </Card>
        
    )
}
export default DataCondition