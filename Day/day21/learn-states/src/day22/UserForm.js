import React, { useRef, useState } from "react";

function UserForm() {
  const [Name, SetName] = useState("");
  const [fruit, setFruit] = useState("");

  // const nameInput = document.getElementById('nameInput');

  const nameInputRef = useRef(null);
  const fruitSelectRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit Clicked");
    const nameInputValue = nameInputRef.current.value;
    const fruitValue = fruitSelectRef.current.value;
    alert(nameInputValue + fruitValue);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setFruit(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px", padding: "20px" }}>
      <label htmlFor="name">Name</label>
      {/* <input type="text" onChange={(event) => SetName(event.target.value)} /> */}
      <input type="text" id="nameInput" ref={nameInputRef} />
      <br />
      <select ref={fruitSelectRef} onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default UserForm;
