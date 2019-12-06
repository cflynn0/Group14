import React from 'react';

const WeatherComp = (props) => {
    return(
        <div className="container">
            <div className="cards pt-4">
                <h1>{props.city}</h1> 
                <h5 className="py-2">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>

                {props.temp_fahrenheit ? (<h1 className="py-2">{props.temp_fahrenheit}&deg;</h1>):null}

                {/**show max and min temp */}
                {minMaxTemp(props.max_temp, props.min_temp)}
                <h4 className="py-3">{props.description}</h4>
        </div>
       </div> 
    );
};

function minMaxTemp(max, min){
    if(min && max){
        return (
            <h3>
                <span className="px-4">{max}&deg;</span>
                <span className="px-4">{min}&deg;</span>
            </h3>
        );
    }
}

export default WeatherComp 