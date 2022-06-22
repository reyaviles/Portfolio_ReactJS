import "./FormStyles.css";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";

const Form = () => {
  const [state, handleSubmit] = useForm("mnqwrlak");
  if (state.succeeded) {
    return <span role="img" aria-label="okay hand">Message Received! 👌</span>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input id="name" type="text" name="name"></input>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email"></input>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label>Subject</label>
        <input id="subject" name="subject" type="text"></input>
        <label>Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Type your message here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button ype="submit" disabled={state.submitting} className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
