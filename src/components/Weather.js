import React from 'react';

const Weather=(props)=>{

    
      return (
        <div className='info'>
        {
          props.tempreature && <p className='info_key'>tempreature: <span className='info_value'></span>{props.tempreature} </p>
        }
        {
          props.city && <p> city : <span className='info_value'>{props.city}</span> </p>
        }
        {
          props.country && <p> country : <span className='info_value'>{props.country}</span> </p>
        }
         {
          props.humidity && <p> humidity : <span className='info_value'>{props.humidity}</span> </p>
        }
         {
          props.description && <p> description : <span className='info_value'>{props.description}</span> </p>
        }
        {
          props.error && <p> error : <span className='info_value'>{props.error}</span> </p>
        }
        </div>
      );
    
  
  }
  
  export default Weather;