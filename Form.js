import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from './firebase';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function onSubmit(e) {
    e.preventDefault()

    firebase.firestore().collection('entries').add({
      firstName,
      location,
      description,
      date,
    })
    .then( () => {
      setFirstName('')
      setLocation('')
      setDescription('')
      setDate('')
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)}
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
        onChange={e => setLocation(e.currentTarget.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="zip"
        label="Zip code"
        name="zip"
        autoComplete="zip"
      />
      <TextField
        value={description}
        onChange={e => setDescription(e.currentTarget.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="description"
        label="What's your weather like?"
        name="description"
        autoComplete="description"
      />
      <TextField
        value={date}
        onChange={e => setDate(e.currentTarget.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="date"
        label="MM/DD/YYYY"
        name="date"
        autoComplete="date"
      />

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
