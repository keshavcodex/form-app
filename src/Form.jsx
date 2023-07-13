import React from "react";
import "./Form.css";
import { useState } from "react";
import { addUser } from "./services/api";

function Form() {
  const defaultValue = {
    userName: "",
    phone: "",
    email: "",
    hobbies: "",
  };
  
  const [form, setForm] = useState(defaultValue);

  const onValueChange = (e) => {
    // we are using "...form" so that new parameter gets append into it
    var settingForm = { ...form, [e.target.name]: e.target.value };
    setForm(settingForm);
    console.log(settingForm);
  };

  const handleSubscribe = async () => {
    var response = await addUser(form);
    console.log(response.data);
    window.location.reload(false);
  };

  return (
    <div className="container">
      <div className="inputs">
        <label>Name</label>
        <input
          onChange={(e) => onValueChange(e)}
          name="userName"
          placeholder="Your Name"
          value={form.userName}
        />
        <label>Phone Number</label>
        <input
          onChange={(e) => onValueChange(e)}
          type="number"
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
        />
        <label>Email</label>
        <input
          onChange={(e) => onValueChange(e)}
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={form.email}
        />
        <label>Hobbies</label>
        <input
          onChange={(e) => onValueChange(e)}
          name="hobbies"
          placeholder="Your Hobbies"
          value={form.hobbies}
        />
        <button type="submit" onClick={handleSubscribe}>Save</button>
      </div>
    </div>
  );
}

export default Form;
