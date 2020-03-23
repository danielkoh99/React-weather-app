import React from 'react';
import Forecast from '../Forecast';
import styled from 'styled-components'

const Div = styled.div`
text-align:center;
display:flex;
`
const Img =styled.div`
text-align:center;
vertical-align:middle;

`
const style = {
    width:100+ '%',
    backgroundColor: "#ffffcc",
}
const conditions = (props) => {
   //console.log(props)
   
    return (
        
        <Div>
            
           {props.responseObj.temp > -100 ?
            <div className="card" style={style}>
                <p className="card-title"><strong>{props.responseObj.city_name}</strong></p>
                <p>{props.responseObj.ob_time}</p>
               <Img> <img src={`https://www.weatherbit.io/static/img/icons/${props.responseObj.weather.icon}.png`} width ="100px" height="100px" alt=""/> </Img>
                <p className="card-text">It is currently {""}
                {Math.round(props.responseObj.temp)} degrees  with  {props.responseObj.weather.description}
                    {""}
                </p>
                
                    
                <Forecast/>
            </div>  
            
            :null
            }
    
        </Div>
        
        
        
        
    )
}
export default conditions
