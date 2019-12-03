import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = values => console.log(values);

  return (
    <form onSubmit={onSubmit}>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Location"
        type="text"
        name="location"
        required
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        type="text"
        name="description"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;