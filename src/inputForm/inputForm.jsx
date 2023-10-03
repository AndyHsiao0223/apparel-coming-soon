import { useState } from 'react';
import './css/inputForm.css';

export default function EmailForm() {
  const [name, setName] = useState("Email Address");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={name}
          // e=onChange, target=input
          onChange={(e) => setName(e.target.value)}
          id="emailAddress"
          name="emailAddress"
          required
        />
      <input type="submit"  value=">" id="submitButton" />
    </form>
  )
}