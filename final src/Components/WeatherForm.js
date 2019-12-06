import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

import "./form.style.css";

const WeatherForm = props => {
    return(
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <TextField id="standard-basic" type="text" className="form-control" name="city" autoComplete="off" label="City"/>
                    </div>
                    <div className="col-md-3">
                        <TextField id="standard-basic" type="text" className="form-control" name="country" autoComplete="off" label="Country"/>
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    )
}

export default WeatherForm;