import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [location, setLocation] = useState("");
  /*const [description, setDescription] = useState("");*/

  const onSubmit = values => console.log(values);

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="firstName"
        label="First name"
        name="firstName"
        autoComplete="firstName"
        autoFocus
      />
      <TextField
        value={location}
        onChange={e => setLocation(e.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="zip"
        label="Zip code"
        name="zip"
        autoComplete="zip"
      />
      <div>&nbsp;</div>
      
      <Button variant="outlined" color="secondary">Sunny</Button>
      <Button variant="outlined" color="secondary">Cloudy</Button>
      <Button variant="outlined" color="secondary">Raining</Button>
      <Button variant="outlined" color="secondary">Snowing</Button>
      <Button variant="outlined" color="secondary">Hail</Button>
      <div>&nbsp;</div>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary">
        Submit
      </Button>
    </form>
  );
}
export default Form;
