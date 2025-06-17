import { useState } from "react";
export const Form = () => {
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert(`Form submitted with UserName: ${userName}, Description: ${description}, Country: ${country}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>UserName </label>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
      </div>
      <div>
        <label>Description </label>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
      </div>
      <div>
        <label>Country </label>
        <select
          value={country}
          onChange={(event) => setCountry(event.target.value)}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
